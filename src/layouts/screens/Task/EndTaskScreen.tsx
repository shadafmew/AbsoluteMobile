import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import { FormPostMethod } from '../../../utils/helper';
import Snackbar from 'react-native-snackbar';



const { width } = Dimensions.get('window')

interface Props { }
const EndTaskScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const [isSecondModalVisible, setSecondModalVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [secondImageUri, setSecondImageUri] = useState<string>();
    const [imageUri, setImageUri] = useState<string>();
    const [imageUris, setImageUris] = useState<string[]>([]);
    const [imageUris2, setImageUris2] = useState<string[]>([]);
    const [beforeremark, setBeforeRemark] = useState<string>();
    const [afterremark, setAfterRemark] = useState<string>();
    const [isLoading, setLoading] = useState(false);




    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setSecondModalVisible(false); // Close the second modal
    };

    const toggleSecondModal = () => {
        setSecondModalVisible(!isSecondModalVisible);
        setModalVisible(false); // Close the first modal
    };

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                    title: 'Camera Permission',
                    message: 'App needs camera permission to capture photos.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                });
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Camera permission granted');
                } else {
                    console.log('Camera permission denied');
                }
            } catch (error) {
                console.log('Error requesting camera permission:', error);
            }
        }
    };


    // FIRST IMAGES BOX==========================

    const beforeCamera = async () => {
        await requestCameraPermission();
        const options = {
            mediaType: 'photo',
        };

        launchCamera(options, (response: ImagePickerResponse) => {
            if (!response.didCancel && !response.error && !response.customButton) {
                const selectedImage = response.assets
                    ? response.assets.map((asset: { uri: any; }) => asset.uri)
                    : [response.uri];

                // Set the selected image URI to the state
                setImageUri(selectedImage[0]);
                toggleModal();
            } else {
                console.log('User cancelled or error:', response.error || response.customButton);
            }
        });
    };

    const beforeImageLibrary = () => {
        const options = {
            mediaType: 'photo',
            selection: 3,
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (!response.didCancel && !response.error && !response.customButton) {
                const selectedImage = response.assets
                    ? response.assets.map((asset) => asset.uri)
                    : [response.uri];

                // Set the selected image URI to the state
                setImageUri(selectedImage[0]);
                setImageUris([...imageUris, ...selectedImage]);


                if (imageUris.length + selectedImage.length >= 3) {
                    setIsVisible(true);
                }

                toggleModal();
            } else {
                console.log('User cancelled or error:', response.error || response.customButton);
            }
        });
    };

    // FIRST IMAGES BOX ENDED==========================

    // FIRST IMAGES BOX==========================

    const afterCamera = async () => {
        await requestCameraPermission();
        const options = {
            mediaType: 'photo',
        };

        launchCamera(options, (response: ImagePickerResponse) => {
            if (!response.didCancel && !response.error && !response.customButton) {
                const selectedImage = response.assets
                    ? response.assets.map((asset) => asset.uri)
                    : [response.uri];

                // Set the selected image URI to the second state
                setSecondImageUri(selectedImage[0]);
                setImageUris2([...imageUris2, ...selectedImage]);

                if (imageUris2.length + selectedImage.length >= 3) {
                    setIsVisible(true);
                }

                toggleSecondModal();
            } else {
                console.log('User cancelled or error:', response.error || response.customButton);
            }
        });
    };


    // ---------------------------

    const afterImageLibrary = () => {
        const options = {
            mediaType: 'photo',
        };
        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (!response.didCancel && !response.error && !response.customButton) {
                const selectedImage = response.assets
                    ? response.assets.map((asset) => asset.uri)
                    : [response.uri];

                setSecondImageUri(selectedImage[0]);
                setImageUris2([...imageUris2, ...selectedImage]);


                if (imageUris2.length + selectedImage.length >= 3) {
                    setIsVisible(true);
                }
                toggleSecondModal();

            } else {
                console.log('User cancelled or error:', response.error || response.customButton);
            }
        });
    };

    // FIRST IMAGES BOX ENDED==========================

    // API CALL==========================

    const uploadImages = async () => {
        const formData = new FormData();
        formData.append('schedule_id', '1');

        formData.append('before_remark', beforeremark);
        imageUris.forEach((uri, index) => {
            formData.append('before_photos[]', {
                uri: uri,
                type: 'image/jpg',
                name: `image${index}.jpg`,
            });
        });
        formData.append('after_remark', afterremark);
        imageUris2.forEach((uri, index) => {
            formData.append('after_photos[]', {
                uri: uri,
                type: 'image/jpg',
                name: `image${index}.jpg`,
            });
        });

        try {
            setLoading(true);
            const api: any = await FormPostMethod(`job-details`, formData);
            if (api.status === 200) {
                console.log("SUCCESS---++", api.data.message)
                console.log("DATA---++", api.data.data)
                setImageUris([]);
                setLoading(false);

                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'green',
                });
            }
            else {
                setLoading(false);
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'red',
                });

            }
        }
        catch (e) {
            console.log('catch', e)
        }
    }

    // API CALL ENDED==========================
    return (
        <View style={styles.container}>
            <ScrollView>
                <Appbar backgroundColor={colors.brand_secondary} navigation={navigation} />
                <View>
                    <View style={styles.customerDetails}>
                        <View style={styles.imageView}>
                            <Image source={require('../../images/costumer-profile.png')} style={styles.customerImage} />
                        </View>
                        <View style={styles.customerDetailsView}>
                            <Text style={styles.name}>David Jones</Text>
                            <Text style={styles.workType}>Commercial Cleaning</Text>
                            <Text style={styles.workType}>15 Nov 2023, 10:00am</Text>
                            <Text style={styles.address}>1, yishun industrial street, 1#07-36 aposh bizuph, singapore,515545</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.heading}>Before Cleaning</Text>
                        <View style={styles.uploadMediaView}>
                            <Text style={styles.uploadMediaText}>Upload Media</Text>
                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: 'row', }}>
                                    {imageUris.map((uri, index) => (
                                        <Image key={index} source={{ uri }} style={styles.uploadedImage} />
                                    ))}
                                    {imageUris.length < 4 && (
                                        <TouchableOpacity style={styles.imageSelector}
                                            onPress={toggleModal}>
                                            <MaterialCommunityIcons name="plus" size={width * 0.1} color="grey" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </ScrollView>
                            <TextInput style={styles.input}
                                placeholder='Enter Remarks'
                                underlineColor={colors.lightGray}
                                placeholderTextColor={colors.gray}
                                multiline={true}
                                numberOfLines={5}
                                value={beforeremark}
                                onChangeText={setBeforeRemark}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.heading}>After Cleaning</Text>
                        <View style={styles.uploadMediaView}>
                            <Text style={styles.uploadMediaText}>Upload Media</Text>
                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: 'row', }}>
                                    {imageUris2.map((uri, index) => (
                                        <Image key={index} source={{ uri: uri }} style={styles.image} />
                                    ))}
                                    <TouchableOpacity style={styles.uploadBtn} onPress={toggleSecondModal} >
                                        <Text style={styles.uploadBtnText}>+</Text>
                                        <Text style={styles.uploadBtnText}>Upload</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                            <TextInput style={styles.input}
                                placeholder='Enter Remarks'
                                underlineColor={colors.lightGray}
                                placeholderTextColor={colors.gray}
                                multiline={true}
                                numberOfLines={5}
                                value={afterremark}
                                onChangeText={setAfterRemark}
                            />
                        </View>
                    </View>
                    {/* =================================================================================================== */}
                    <Modal isVisible={isModalVisible}>
                        <View style={styles.popUp}>
                            <View style={styles.crossBtn}>
                                <View><Text> </Text></View>
                                <TouchableOpacity onPress={toggleModal} >
                                    <Text style={{ color: 'grey', fontSize: width * 0.06, paddingBottom: 3 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.optionBtns}>
                                <TouchableOpacity style={styles.optionS}
                                    onPress={beforeImageLibrary}
                                >
                                    <MaterialIcons name="insert-photo" size={width * 0.1} color={colors.brand_primary} />
                                    <Text style={styles.optionText}>Library</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.optionS}
                                    onPress={beforeCamera}
                                >
                                    <MaterialCommunityIcons name="camera" size={width * 0.1} color={colors.brand_primary} />
                                    <Text style={styles.optionText}>Camera</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Modal isVisible={isSecondModalVisible}>
                        <View style={styles.popUp}>
                            <View style={styles.crossBtn}>
                                <View><Text> </Text></View>
                                <TouchableOpacity onPress={toggleSecondModal}>
                                    <Text style={{ color: 'grey', fontSize: width * 0.06, paddingBottom: 3 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.optionBtns}>
                                <TouchableOpacity style={styles.optionS} onPress={afterImageLibrary}>
                                    <MaterialIcons name="insert-photo" size={width * 0.1} color={colors.brand_primary} />
                                    <Text style={styles.optionText}>Library</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.optionS} onPress={afterCamera}>
                                    <MaterialCommunityIcons name="camera" size={width * 0.1} color={colors.brand_primary} />
                                    <Text style={styles.optionText}>Camera</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    {/* ================================================================================== */}
                    <View style={{ flexDirection: 'row', marginVertical: 30, justifyContent: 'space-around', }}>
                        <View style={styles.time}>
                            <Text style={styles.timeText}>Start Time 11:01 am</Text>
                        </View>
                        <Pressable style={styles.StartTask} onPress={() => uploadImages()}
                        // onPress={() => navigation.navigate('ReviewScreen')}
                        >
                            {isLoading ? (
                                <ActivityIndicator size="small" color={colors.white} />
                            ) : (
                                <Text style={styles.StartTaskText}>End Task</Text>
                            )}
                        </Pressable>
                    </View>

                </View>
            </ScrollView>

        </View>
    );
};

export default EndTaskScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    customerDetails: {
        flexDirection: 'row',
        // width: width * 0.8,
        // alignSelf: 'center',
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: colors.white,
        paddingLeft: 20,
        elevation: 8,
    },
    imageView: {
        height: width * 0.2,
        width: width * 0.2,
        borderRadius: 60,
        marginRight: 20,
    },
    customerDetailsView: {
        // backgroundColor:'red',
        width: width * 0.65,

    },
    customerImage: {
        height: width * 0.20,
        width: width * 0.20,
        alignSelf: 'center',
    },
    name: {
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        fontSize: 16,
    },
    workType: {
        fontFamily: 'Poppins-Regular',
        color: colors.black,
        fontSize: 12,
        marginTop: -6,
    },
    address: {
        fontFamily: 'Poppins-Regular',
        color: colors.black,
        fontSize: 10,
        // marginTop: -6,
    },
    heading: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    uploadMediaView: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    uploadMediaText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    image: {
        height: width * 0.2,
        width: width * 0.2,
        marginRight: 10,
    },
    uploadBtn: {
        height: width * 0.2,
        width: width * 0.2,
        backgroundColor: '#E1E1E1',
        borderColor: colors.gray,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadBtnText: {
        color: colors.gray,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    popUp: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.brand_primary,
        backgroundColor: 'white',
        width: width * 0.8,
        padding: 10,
        marginLeft: '5%'
    },
    crossBtn: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        marginLeft: '5%',
        marginBottom: 10,
    },
    optionBtns: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 10,

    },
    optionS: {
        width: '30%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.brand_primary,
        paddingTop: 7,
        paddingBottom: 7
    },
    optionText: {
        color: colors.brand_primary,
    },
    StartTask: {
        alignItems: 'center',
        backgroundColor: colors.brand_primary,
        width: width * 0.4,
        alignSelf: 'center',
        borderRadius: 8,
        // paddingHorizontal: 15,
        paddingVertical: 8,
    },
    StartTaskText: {
        fontSize: 12,
        color: colors.white,
        marginTop: 5,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
    },
    time: {
        backgroundColor: colors.lightGray,
        alignSelf: 'center',
        borderRadius: 8,
        // paddingHorizontal: 15,
        paddingVertical: 8,
        width: width * 0.4,


    },
    timeText: {
        fontSize: 12,
        color: colors.black,
        marginTop: 5,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',

    },
    input: {
        marginVertical: 20,
        backgroundColor: '#E1E1E1',
    },
    imageSelector: {
        height: width * 0.3,
        width: width * 0.3,
        backgroundColor: '#E3E3E3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadedImage: {
        width: width * 0.3,
        height: width * 0.3,
        marginRight: 20,
    },
});
