import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../style/Colors';

interface Props { }
const MyAttendanceDetailScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.attendBox1}>
                <IonIcon name="arrow-back-sharp" color={colors.white} size={24} onPress={() => navigation.goBack()} style={styles.backArrow} />
                <Text style={styles.head}>My Attendance</Text>
            </View>

            <ScrollView>
                <View>
                    <View style={styles.attendanceItem}>
                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance} onPress={() => navigation.navigate('TimeSheetScreen')}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>08 Mon</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>09 Tus</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={[styles.date, { backgroundColor:colors.Datebg_green,}]}>
                                <Text style={[styles.dateData, { textAlign: 'center', color: colors.white, }]}>10 Wed</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>11 Thr</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>12 Fri</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>13 Sat</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>14 Sun</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>15 Mon</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}

                        {/* ONE TIME CHECKIN VIEW===================== */}
                        <TouchableOpacity style={styles.attendance}>
                            <View style={styles.date}>
                                <Text style={[styles.dateData, { textAlign: 'center' }]}>16 Tue</Text>
                            </View>
                            <View style={styles.punchIn}>
                                <Text style={styles.punchHead}>Check In:</Text><Text style={styles.dateData}>9:35 AM</Text>
                            </View>
                            <View style={styles.punchOut}>
                                <Text style={styles.punchHead}>Check Out:</Text>
                                <Text style={styles.dateData}>
                                    <Text style={styles.dateData}>5:35 PM</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* ============================================= */}
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

export default MyAttendanceDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.white,
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
    attendanceItem: {
        marginVertical: 20,
        width: '90%',
        marginLeft: '5%',
    },
    attendance: {
        backgroundColor: '#F3F3F3',
        marginBottom: 10,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    date: {
        width: '20%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginRight: '3%',

    },
    punchIn: {
        width: '36%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#484A4B',
        borderRightWidth: 1,


    },
    punchOut: {
        width: '36%',
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    punchHead: {
        color: 'black',
        fontWeight: '600',

    },
    dateData: {
        color: 'black',
        alignContent: "center",
        textAlign: 'left',
    },


});
