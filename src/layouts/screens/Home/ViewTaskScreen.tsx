import React from 'react';
import { FC } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Dimensions } from 'react-native';
import colors from '../../style/Colors';
import Appbar from '../../Component/Appbar';
import { TouchableOpacity } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';



const { width } = Dimensions.get('window')
interface Props { }
const ViewTaskScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const openWhatsApp = () => {
        // const phoneNumber = `65${oderDetails?.phone}`;
        const phoneNumber = `6589878546`;


        SendIntentAndroid.openAppWithUri(`whatsapp://send?phone=${phoneNumber}`)
            .then(isOpened => {
                if (!isOpened) {
                    console.log('WhatsApp not installed.');
                }
            })
            .catch(error => {
                console.error('Error opening WhatsApp:', error);
            });
    };

    return (
        <>
            <Appbar navigation={navigation} backgroundColor="white" />
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image source={require('../../images/location.png')} style={styles.location} />
                        <Text style={styles.address}>12/24 Karol Bagh ,{'\n'}
                            delhi 110005</Text>
                    </View>
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.text1}>Start Date</Text>
                            <Text style={styles.text2}>End Date</Text>
                        </View>
                        <View>
                            <Text style={styles.date1}>28 Apr 2023</Text>
                            <Text style={styles.date2}>09 May 2023</Text>
                        </View>
                    </View>
                    <View style={styles.align}>
                        <TouchableOpacity onPress={openWhatsApp}>
                            <Text style={styles.customer}>Call Customer</Text>
                            <Text style={styles.number}>+65 1234567890</Text>
                        </TouchableOpacity>

                        <Image source={require('../../images/customer.png')} style={styles.customerImg} />
                    </View>
                    <View style={styles.jobDescription}>
                        <View>
                            <Text style={styles.jobDescriptionText}>Job description</Text>
                        </View>
                        <View style={styles.btns}>
                            <TouchableOpacity style={styles.jobTypebtn}>
                                <Text style={styles.cleaningbtn}>Cleaning</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.jobTypebtnWhite}>
                                <Text style={styles.whitebtn}>Mopping</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.jobTypebtn}>
                                <Text style={styles.cleaningbtn}>Dusting</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnss}>
                            <TouchableOpacity style={styles.jobTypebtn}>
                                <Text style={styles.cleaningbtn}>Sweeping</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.jobTypebtnWhite}>
                                <Text style={styles.whitebtn}>Sanitizing</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Pressable style={styles.StartTask} onPress={() => navigation.navigate('StartTaskScreen')}>
                        <Text style={styles.StartTaskText}>Start Task</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </>
    );
};

export default ViewTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        //   padding: 16
    },
    StartTaskText: {
        fontSize: 18,
        color: colors.white,
        marginTop: 5,
        fontFamily: 'Poppins-Medium'
    },
    StartTask: {
        alignItems: 'center',
        backgroundColor: colors.brand_primary,
        height: 40,
        width: 130,
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 50,
    },
    location: {
        marginTop: 40,
        height: width * 0.25,
        width: width * 0.25,
    },
    address: {
        color: colors.brand_primary,
        marginTop: 60,
        marginLeft: 30,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',

    },
    card: {
        borderColor: colors.brand_secondary,
        backgroundColor: colors.brand_secondary,
        borderWidth: 1,
        padding: 15,
        marginTop: 40,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 8,
        width: width * 0.85,
        alignSelf: 'center'
    },
    text1: {
        color: colors.gray,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    text2: {
        color: colors.gray,
        // marginLeft: 20,
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
    },
    date1: {
        color: colors.brand_primary,
        marginRight: 30,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

    },
    date2: {
        color: colors.brand_primary,
        marginRight: 40,
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
    },
    customer: {
        color: colors.brand_primary,
        fontFamily: 'Poppins-Medium',
        marginTop: 20,
    },
    number: {
        color: colors.gray,
        fontFamily: 'Poppins-Medium'
    },
    align: {
        marginTop: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around'
    },
    customerImg: {
        marginLeft: 40
    },
    jobDescription: {
        paddingHorizontal: width * 0.1,
        paddingTop: width * 0.08,
    },
    jobDescriptionText: {
        color: colors.black
    },
    jobTypebtn: {
        backgroundColor: colors.Datebg_green,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    cleaningbtn: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        elevation: 8,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btnss: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width:width*0.55,
        // backgroundColor:'red',
    },
    jobTypebtnWhite: {
        backgroundColor: '#FAFAFA',
        elevation: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    whitebtn: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    extraMargin:{
        marginLeft:20,
    }

})
