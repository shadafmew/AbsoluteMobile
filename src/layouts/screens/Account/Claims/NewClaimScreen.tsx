import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../style/Colors';
import Appbar from '../../../Component/Appbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window')
interface Props { }
const NewClaimScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    // const pickDocument = async () => {
    //     try {
    //         const result = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.allFiles],
    //         });
    //         console.log(result);
    //         setSelectedDocument(result);
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             console.log('Document picking cancelled');
    //         } else {
    //             throw err;
    //         }
    //     }
    // };



    // ===== function for button 1 ======


    const [isModalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [imageUris, setImageUris] = useState<string[]>([]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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

    const openCamera = async () => {
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

    const openImageLibrary = () => {
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


    return (
        <>
            <Appbar navigation={navigation} />
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.header}>Claim Application</Text>
                        <View style={styles.newLeaveForm}>
                            <View style={styles.section}>
                                <Text style={styles.text}>Claim Type:</Text>
                                {/* TOGGLE BUTTON ONE==================== */}
                                <View style={styles.btnOne}>
                                    <TouchableOpacity style={styles.dropDown} onPress={toggleVisibility}>

                                        <View style={styles.type}>
                                            <Text style={styles.dropDownText}>Annual</Text>
                                            {isVisible ? (
                                                <IonIcon name="chevron-up" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                            ) : (
                                                <IonIcon name="chevron-down" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                    {isVisible && (
                                        <View style={styles.dropDownView}>
                                            <Text style={styles.visibleText}>View now visible!</Text>
                                        </View>
                                    )}
                                </View>
                                {/* TOGGLE BUTTON ONE==================== */}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.text}>Claim Description:</Text>
                                <TextInput
                                    placeholder='Enter Reason'
                                    placeholderTextColor={colors.gray}
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.text}>Claim Amount:</Text>
                                <TextInput
                                    placeholder='$21.00'
                                    placeholderTextColor={colors.gray}
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.uploadMedia}>
                                <Text style={styles.uploadMediahead}>Upload Media</Text>
                                <ScrollView horizontal={true}>
                                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                                        {imageUris.map((uri, index) => (
                                            <Image key={index} source={{ uri: uri }} style={styles.image} />
                                        ))}
                                        <TouchableOpacity style={styles.uploadBtn} onPress={toggleModal} >
                                            <Text style={styles.uploadBtnText}>+</Text>
                                            <Text style={styles.uploadBtnText}>Upload</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>

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
                                                onPress={openImageLibrary}
                                            >
                                                <MaterialIcons name="insert-photo" size={width * 0.1} color={colors.brand_primary} />
                                                <Text style={styles.optionText}>Library</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.optionS}
                                                onPress={openCamera}
                                            >
                                                <MaterialCommunityIcons name="camera" size={width * 0.1} color={colors.brand_primary} />
                                                <Text style={styles.optionText}>Camera</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                                {/* =================================================================================================== */}

                            </View>
                        </View>
                        <TouchableOpacity style={styles.saveBtn}>
                            <Text style={styles.saveBtnText}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default NewClaimScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
        padding: 20

    },
    header: {
        alignSelf: 'center',
        color: colors.black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
    outerView: {
        marginVertical: 30,
    },
    detail: {
        backgroundColor: colors.white,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    },
    detailView: {
        paddingVertical: 18,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    detailText: {
        color: colors.darkgray,
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    icon: {
        marginRight: 20,
        alignSelf: 'center',
    },
    textInput: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        width: width * 0.7,
        alignSelf: 'center',
        marginVertical: 20,

    },
    saveBtn: {
        backgroundColor: colors.brand_primary,
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 8,
        marginVertical: 40
    },
    saveBtnText: {
        color: colors.white,
        fontSize: 16,
    },
    newLeaveForm: {
        backgroundColor: colors.white,
        marginTop: 30,
        borderRadius: 8,
        paddingBottom: 10,
        elevation: 8,
    },
    section: {
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section2: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        color: colors.gray,
        fontWeight: '600',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    text: {
        color: colors.black,
        fontWeight: '600',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',

    },
    toggleButtons: {
        flexDirection: 'row',
        backgroundColor: '#E1E1E1',
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 15
        // color: colors.gray,

    },
    toggleButton: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 15,
        color: colors.gray,

    },
    activeToggleButton: {
        backgroundColor: colors.white,
        color: colors.black,

    },
    activeToggleButtonText: {
        color: colors.black,
    },
    dropDown: {
        flexDirection: 'row',
        width:width*0.38,
        justifyContent: 'flex-end',
        // paddingVertical: 10,

    },
    btnOne: {
        // marginHorizontal: 20,
justifyContent:'flex-end',
    },
    input: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        // marginTop: 6,
        borderRadius: 8,
        paddingVertical: 0,
        paddingLeft: 10,
        width: width * 0.38,


    },
    dropDownView: {
        // padding: 20,
        // backgroundColor: colors.textInput_color,
    },
    dropDownText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    visibleText: {
        color: colors.black,
        fontFamily: 'Poppins-Regular'
    },
    type: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        borderColor: colors.gray,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    uploadMedia: {
        backgroundColor: colors.white,
        padding: 15,
        // marginTop: 10,
    },
    uploadMediahead: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        // marginTop: 30,
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
});
