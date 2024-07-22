import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Appbar from '../../../Component/Appbar';
import colors from '../../../style/Colors';
import CalendarStrip from 'react-native-calendar-strip';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');



interface Props {
    barColors: string
}
const EarningScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View style={{ paddingBottom: 80, }}>
                    <Text style={styles.heading}>Earnings</Text>
                    <View style={styles.totalEarningView}>
                        <Text style={styles.amountHead}>Total Earnings</Text>
                        <Text style={styles.amount}>$ 12,497.21</Text>
                    </View>
                    <View style={styles.earningView}>
                        {/* DATE SECTION====================== */}
                        <View style={styles.leaveSection}>
                            <Text style={styles.month}>March 2023</Text>
                            {/* AWAITING VIEW================ */}
                            <View style={styles.leaveDetail}>
                                <View style={styles.leaveDetailTop}>
                                    <View>
                                        <Text style={styles.leaveDate}>March Earnings</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.awaitingView}>$2356</Text>
                                    </View>
                                </View>
                            </View>
                            {/* AWAITING VIEW ENDED========== */}
                        </View>
                        {/* DATE SECTION ENDED=============== */}
                    </View>
                    <View style={styles.earningView}>
                        {/* DATE SECTION====================== */}
                        <View style={styles.leaveSection}>
                            <Text style={styles.month}>April 2023</Text>
                            {/* AWAITING VIEW================ */}
                            <View style={styles.leaveDetail}>
                                <View style={styles.leaveDetailTop}>
                                    <View>
                                        <Text style={styles.leaveDate}>April Earnings</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.awaitingView}>$2356</Text>
                                    </View>
                                </View>
                            </View>
                            {/* AWAITING VIEW ENDED========== */}
                        </View>
                        {/* DATE SECTION ENDED=============== */}
                    </View>
                    <View style={styles.earningView}>
                        {/* DATE SECTION====================== */}
                        <View style={styles.leaveSection}>
                            <Text style={styles.month}>May 2023</Text>
                            {/* AWAITING VIEW================ */}
                            <View style={styles.leaveDetail}>
                                <View style={styles.leaveDetailTop}>
                                    <View>
                                        <Text style={styles.leaveDate}>May Earnings</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.awaitingView}>$2356</Text>
                                    </View>
                                </View>
                            </View>
                            {/* AWAITING VIEW ENDED========== */}
                        </View>
                        {/* DATE SECTION ENDED=============== */}
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

export default EarningScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.brand_secondary,
    },
    heading: {
        color: colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 20,
        alignSelf:'center',
        // marginLeft: width * 0.06,
    },
    totalEarningView: {
        backgroundColor: colors.brand_primary,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    amountHead: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: colors.white,

    },
    amount: {
        color: colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
    },
    calendar: {
        height: 120,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    month: {
        color: colors.gray_font_color,
        fontSize: 16,

    },
    leaveDetail: {
        backgroundColor: colors.white,
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        elevation:8,


    },
    leaveSection: {
        marginVertical: 10,
    },
    leaveDetailTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowButton: {
        backgroundColor: colors.back_btn_bg,
        borderRadius: 5
    },
    awaitingView: {
        backgroundColor: colors.orange_bg,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        color: colors.awaiting_text,

    },
    leaveDuration: {
        color: colors.gray_font_color,
    },
    leaveDate: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 15,
    },
    casual: {
        color: colors.text_orange,
        fontSize: 14
    },
    earningView: {
        alignSelf: 'center',
        width: width * 0.9,
        borderRadius: 8,
    }
});
