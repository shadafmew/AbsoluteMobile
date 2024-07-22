import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../style/Colors';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Appbar from '../../../Component/Appbar';




const { width, height } = Dimensions.get('window');


interface Props { }
const PayslipSummaryScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    // ===== function for button 1 ======
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // ===== function for button 2 ======
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    // ===== function for button 3 ======
    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };

    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View>
                    <View style={styles.view}>
                        <Text style={styles.payHead}>$3680.35</Text>
                        <Text style={styles.payHeadDate}>October 2023</Text>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.progressBar}>
                            <AnimatedCircularProgress
                                size={130}
                                width={5}
                                fill={75}
                                tintColor={colors.brand_primary}
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor={colors.yellow} >
                                {(fill) => (
                                    <View>
                                        <Text style={styles.amount}>$3256</Text>
                                        {/* <Text style={styles.days}>Gross Pay</Text> */}
                                    </View>
                                )}
                            </AnimatedCircularProgress>
                        </View>
                        <View style={styles.amountDetails}>
                            <Text> </Text>
                            <View style={{ flexDirection: 'row', marginVertical: 7, }}>
                                <Text style={{ color: colors.yellow, fontSize: 14, marginRight: 5, }}>●</Text><Text style={styles.amountText}>Tax & Deduction ($1000)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <View>
                            {/* TOGGLE BUTTON ONE==================== */}
                            <View style={styles.btnOne}>
                                <TouchableOpacity style={styles.dropDown} onPress={toggleVisibility}>
                                    <View>
                                        <Text style={styles.dropDownText}>Total Hours</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dropDownText}>56 h</Text>
                                        {isVisible ? (
                                            <IonIcon name="chevron-up" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        ) : (
                                            <IonIcon name="chevron-down" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        )}
                                    </View>
                                </TouchableOpacity>
                                {isVisible && (
                                    <View style={styles.dropDownView}>
                                        <Text style={styles.visibleText}>This view is now visible!</Text>
                                    </View>
                                )}
                            </View>
                            {/* TOGGLE BUTTON ONE==================== */}

                            {/* TOGGLE BUTTON TWO==================== */}
                            <View style={styles.btnOne}>
                                <TouchableOpacity style={styles.dropDown} onPress={toggleVisibility2}>
                                    <View>
                                        <Text style={styles.dropDownText}>Total Earnings</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dropDownText}>$4680</Text>
                                        {isVisible2 ? (
                                            <IonIcon name="chevron-up" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        ) : (
                                            <IonIcon name="chevron-down" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        )}
                                    </View>
                                </TouchableOpacity>
                                {isVisible2 && (
                                    <View style={styles.dropDownView}>
                                        <Text style={styles.visibleText}>This view is now visible!</Text>
                                    </View>
                                )}
                            </View>
                            {/* TOGGLE BUTTON TWO==================== */}

                            {/* TOGGLE BUTTON THREE================== */}
                            <View style={styles.btnOne}>
                                <TouchableOpacity style={styles.dropDown} onPress={toggleVisibility3}>
                                    <View>
                                        <Text style={styles.dropDownText}>Taxes & Deduction</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.dropDownText}>$1000</Text>
                                        {isVisible3 ? (
                                            <IonIcon name="chevron-up" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        ) : (
                                            <IonIcon name="chevron-down" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                                        )}
                                    </View>
                                </TouchableOpacity>
                                {isVisible3 && (
                                    <View style={styles.dropDownView}>
                                        <View style={styles.flexView}>
                                            <Text style={styles.innerText}>HRA</Text>
                                            <Text style={styles.innerText}>$300</Text>
                                        </View>
                                        <View style={styles.flexView}>
                                            <Text style={styles.innerText}>SPL Allowance</Text>
                                            <Text style={styles.innerText}>$400</Text>
                                        </View>
                                        <View style={styles.flexView}>
                                            <Text style={styles.innerText}>Other Allowance</Text>
                                            <Text style={styles.innerText}>$300</Text>
                                        </View>

                                    </View>
                                )}
                            </View>
                            {/* TOGGLE BUTTON THREE================== */}

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};

export default PayslipSummaryScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    view: {
        backgroundColor: colors.white,
        width: width * 0.85,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 8,
        elevation: 8
    },
    attendBox1: {
        height: width * 0.45,
        paddingLeft: 30,
        paddingTop: 15,
        backgroundColor: colors.brand_primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    head: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',

    },
    payHead: {
        color: colors.black,
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '800',
        marginTop: 10,
        alignSelf: 'center',
    },
    payHeadDate: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        // fontWeight: '700',
        marginTop: 10,
        marginBottom: 10,

        alignSelf: 'center',

    },
    detailsHeading: {
        width: width * 0.999,
        paddingVertical: 10,
        // borderBottomColor: colors.gray_font,
        borderBottomWidth: 0.5,
    },
    detailsHeadingText: {
        color: colors.black,
        alignSelf: 'center',
    },
    progressBar: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountDetails: {
        flexDirection: 'row',
        // width: width * 0.999,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10
    },
    amountText: {
        color: colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        marginTop: 3,
    },
    dropDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,

    },
    btnOne: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5,
        marginHorizontal: 20,

    },
    dropDownView: {
        padding: 20,
        // backgroundColor: colors.textInput_color,
    },
    dropDownText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    innerText: {
        color: '#414141',
        fontSize: 12,
        fontFamily: 'Poppins-Medium'
    },
    flexView: {
        flexDirection: 'row',
        width: width * 0.72,
        justifyContent: 'space-between',
    },
    days: {
        fontSize: 12,
        // color: colors.account_font,
        // backgroundColor:'red',
        alignSelf: 'center',
    },
    amount: {
        fontSize: 14,
        // color: colors.account_font,
        // backgroundColor:'red',
        fontWeight: '700',
        alignSelf: 'center',
        color: colors.black
    },
    visibleText: {
        color: colors.black,
        fontFamily: 'Poppins-Regular'
    }

})
