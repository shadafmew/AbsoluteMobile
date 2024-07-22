import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Appbar from '../../../Component/Appbar';
import AttendanceNavigation from '../../../navigation/Top/Attendance/AttendanceNavigation';



const { width, height } = Dimensions.get('window');
interface Props { }
const MyAttendanceScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            
            <Appbar navigation={navigation} />
                <View style={styles.attendanceView}>
                    {/* <Text style={styles.headings}>Monthly Attendance</Text> */}
                </View>
                <AttendanceNavigation />
                {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('MyAttendanceDetailScreen')}>
                        <Text style={styles.date}>Jan 2023</Text>
                        <View style={styles.attendanceBox2}>
                            <View style={styles.progressView}>
                                <AnimatedCircularProgress
                                    size={70}
                                    width={3}
                                    fill={90}
                                    tintColor="#062A5E"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor={colors.brand_secondary} >
                                    {(fill) => (
                                        <View>
                                            <Text style={styles.days}>27 days</Text>
                                            <Text style={styles.days}>Present</Text>
                                        </View>
                                    )}
                                </AnimatedCircularProgress>
                            </View>
                            <View style={styles.attendanceDetail}>
                                <Text style={styles.heading}>Total Working days</Text>
                                <Text style={styles.text}>27 Days</Text>
                                <Text style={styles.heading}>Official Leaves</Text>
                                <Text style={styles.text}>4 Days</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('MyAttendanceDetails')}>
                        <Text style={styles.date}>Dec 2022</Text>
                        <View style={styles.attendanceBox2}>
                            <View style={styles.progressView}>
                                <AnimatedCircularProgress
                                    size={70}
                                    width={3}
                                    fill={90}
                                    tintColor="#062A5E"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor={colors.brand_secondary} >
                                    {(fill) => (
                                        <View>
                                            <Text style={styles.days}>21 days</Text>
                                            <Text style={styles.days}>Present</Text>
                                        </View>
                                    )}
                                </AnimatedCircularProgress>
                            </View>
                            <View style={styles.attendanceDetail}>
                                <Text style={styles.heading}>Total Working days</Text>
                                <Text style={styles.text}>21 Days</Text>
                                <Text style={styles.heading}>Official Leaves</Text>
                                <Text style={styles.text}>10 Days</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('MyAttendanceDetails')}>
                        <Text style={styles.date}>Nov 2022</Text>
                        <View style={styles.attendanceBox2}>
                            <View style={styles.progressView}>
                                <AnimatedCircularProgress
                                    size={70}
                                    width={3}
                                    fill={90}
                                    tintColor="#062A5E"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor={colors.brand_secondary} >
                                    {(fill) => (
                                        <View>
                                            <Text style={styles.days}>15 days</Text>
                                            <Text style={styles.days}>Present</Text>
                                        </View>
                                    )}
                                </AnimatedCircularProgress>
                            </View>
                            <View style={styles.attendanceDetail}>
                                <Text style={styles.heading}>Total Working days</Text>
                                <Text style={styles.text}>15 Days</Text>
                                <Text style={styles.heading}>Official Leaves</Text>
                                <Text style={styles.text}>15 Days</Text>
                            </View>
                        </View>
                    </TouchableOpacity> */}
        </View>
    );
};

export default MyAttendanceScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    attendBox1: {
        height: 120,
        backgroundColor: colors.brand_primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    head: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: colors.white,
        textAlign: 'center',

    },
    backArrow: {
        marginTop: 20,
        marginLeft: 20,
    },
    attendanceView: {
        padding: 10,
    },
    date: {
        color: colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,

    },
    attendanceBox2: {
        //   borderWidth: 1,
        //   borderColor: colors.brand_primary,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 8,
        flexDirection: 'row',
    },
    progressView: {
        width: width * 0.35,
        justifyContent: 'center',
    },
    days: {
        fontSize: 10,
        color: colors.text_date,
    },
    attendanceDetail: {
        // backgroundColor: 'red'
    },
    heading: {
        fontSize: 12,
        color: '#484A4B',
        fontWeight: '600',
    },
    text: {
        fontSize: 10,
        color: colors.text_date,
        fontWeight: '500',
    },
    headings: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',


    },

})
