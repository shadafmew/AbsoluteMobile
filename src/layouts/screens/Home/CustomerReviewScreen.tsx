import React, { useRef, useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';
import colors from '../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';
import SignatureScreen from "react-native-signature-canvas";
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import { TextInput } from 'react-native-paper';



const { width, height } = Dimensions.get('window');

interface Props { }
const CustomerReviewScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const [signatureModalVisible, setSignatureModalVisible] = useState(false);
    const signatureRef = useRef(null);
    const [imageUri, setImageUri] = useState<string>();

    const handleSignatureModal = () => {
        setSignatureModalVisible(!signatureModalVisible);
    };
    const handleOK = (signature: string) => {
        // const path = RNFS.CachesDirectoryPath + `img-${new Date().valueOf()}.jpg`;
        // RNFS.writeFile(path, signature.replace("data:image/png;base64,", ""), 'base64')
        // setImageUri(path);
        setSignatureModalVisible(false)
    };


    const [starCount, setStarCount] = useState(0);

    const onStarRatingPress = (rating) => {
        setStarCount(rating);
        // You can also send the rating to your server or perform other actions here.
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <IonIcon name="arrow-back" color={colors.brand_primary} size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
                <Text style={styles.text2}>Customer Satisfaction:</Text>
                <View style={styles.box4}>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={starCount}
                            selectedStar={(rating: any) => onStarRatingPress(rating)}
                            emptyStarColor={'gold'}
                            fullStarColor={'gold'}
                        />
                    </View>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text2}>Comments</Text>
                    <TextInput
                        activeUnderlineColor={colors.lightGray}
                        placeholder='Enter comments here'
                        underlineColor={colors.white}
                        placeholderTextColor={colors.gray}
                        multiline={true}
                        numberOfLines={5}
                        // value={value}
                        // onChangeText={value => onChange(value)}
                        style={styles.input}
                    // left={<TextInput.Icon icon="lock-outline" color={colors.gray} />}
                    />
                </View>

                <View style={styles.compensationBox}>
                    <Text style={styles.text}>COMPENSATING DAMAGE:</Text>
                    <Text style={styles.texts}>In order to verify the purchase of a damaged item, a receipt need to be provided  in some instances , and this would be the first step in assessing
                        compensation</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text2}> Customer Signature</Text>
                    <TouchableOpacity style={styles.signBox} onPress={handleSignatureModal}>
                        <Text style={styles.signText}>Sign here</Text>
                    </TouchableOpacity>
                    {/* SIGNATURE-MODAL============================ */}
                    <Modal isVisible={signatureModalVisible} onDismiss={handleSignatureModal} style={styles.modalContent} >
                        <View style={styles.whiteBoard}>
                            <SignatureScreen ref={signatureRef} onOK={handleOK} />
                        </View>
                    </Modal>
                    {/* SIGNATURE-MODAL============================= */}
                </View>
                <TouchableOpacity style={styles.inspectionBtn} onPress={()=> navigation.navigate('PaymentScreen')}>
                    <Text style={styles.inspectionBtnText}>Complete Survey</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default CustomerReviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.ChechIn_bg,
    },
    box: {
        backgroundColor: colors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 15,
    },
    compensationBox: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 15,
    },
    backIcon: {
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: colors.white
    },
    text: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
    },
    text2: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 10,
        alignSelf: 'center',
    },
    texts: {
        color: colors.black,
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
    },
    box2: {
        marginTop: 15,
        elevation: 5,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    box4: {
        marginTop: 10,
        marginBottom: 20,
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: 8,
        // borderBottomLeftRadius: 12,
        // borderBottomRightRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: width * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    stars: {
        // flexDirection: 'row',
        width: width * 0.9,
        paddingBottom: 5,
        // alignSelf: 'center',
        paddingHorizontal: 30,


    },
    vector: {
        marginHorizontal: 5,
    },
    commentView: {
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 6,
    },
    signBox: {
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 6,
        height: width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        padding: 7,
        color: colors.black,
    },
    note: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        padding: 7,
        color: colors.black,
    },
    box3: {
        marginTop: 15,
        elevation: 5,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    signText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        padding: 7,
        color: colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inspectionBtn: {
        backgroundColor: colors.brand_primary,
        paddingVertical: 7,
        paddingHorizontal: 15,
        // marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: width * 0.15,
        borderRadius: 8,

    },
    inspectionBtnText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        alignItems: 'center',
        marginTop: 3
    },
    modalContent: {
        backgroundColor: 'white',
        height: '50%'
    },
    whiteBoard: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
    },
    input: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        marginTop: 6,
        borderRadius: 8,

    },
});
