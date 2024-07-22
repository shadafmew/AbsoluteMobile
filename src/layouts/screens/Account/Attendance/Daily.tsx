import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../../style/Colors';


const { width, height } = Dimensions.get('window');

interface Props { }
const Daily: FC<Props> = ({ navigation }: any): JSX.Element => {

    interface DailyData {
        id: string;
        date: string;
        day: string;
        CheckIn: string;
        CheckOut: string;
    }

    const dailyData: DailyData[] = [
        { id: '1', date: '05', day: 'Sun', CheckIn: '9:35 AM', CheckOut: '5:35 AM', },
        { id: '2', date: '06', day: 'Mon', CheckIn: '6:35 AM', CheckOut: '7:35 AM', },
        { id: '3', date: '07', day: 'Tue', CheckIn: '7:35 AM', CheckOut: '8:35 AM', },
        { id: '4', date: '08', day: 'Wed', CheckIn: '8:35 AM', CheckOut: '9:35 AM', },
        // Add more months as needed
    ];



    const renderItem = ({ item }: { item: DailyData }) => (
        <TouchableOpacity style={styles.attendance} onPress={() => navigation.navigate('TimeSheetScreen')}>
            <View style={styles.date}>
                <Text style={[styles.dateData, { textAlign: 'center' }]}>{item.date}</Text>
                <Text style={[styles.dateData, { textAlign: 'center' }]}>{item.day}</Text>

            </View>
            <View style={styles.punchIn}>
                <Text style={styles.punchHead}>Check In:</Text>
                <Text style={styles.dateData}>{item.CheckIn}</Text>
            </View>
            <View style={styles.punchOut}>
                <Text style={styles.punchHead}>Check Out:</Text>
                <Text style={styles.dateData}>
                    <Text style={styles.dateData}>{item.CheckOut}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.headings}>Daily Attendance</Text>
            <ScrollView>
                {/* <Text style={styles.headings}>Monthly Attendance</Text> */}
                <View style={styles.attendanceItem}>


                    <FlatList
                        data={dailyData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance} onPress={() => navigation.navigate('TimeSheetScreen')}>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
                        <View style={[styles.date, { backgroundColor: colors.Datebg_green, }]}>
                            <Text style={[styles.dateData, { textAlign: 'center', color: colors.white, }]}>10</Text>
                            <Text style={[styles.dateData, { textAlign: 'center', color: colors.white, }]}>Wed</Text>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
                        <View style={styles.date}>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>11</Text>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>Thr</Text>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
                        <View style={styles.date}>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>12</Text>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>Fri</Text>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
                        <View style={styles.date}>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>13</Text>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>Sat</Text>

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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
                        <View style={styles.date}>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>14</Text>
                            <Text style={[styles.dateData, { textAlign: 'center' }]}>Sun</Text>

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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}

                    {/* ONE TIME CHECKIN VIEW===================== */}
                    {/* <TouchableOpacity style={styles.attendance}>
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
                    </TouchableOpacity> */}
                    {/* ============================================= */}
                </View>
            </ScrollView>
        </View>
    );
};

export default Daily;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brand_secondary,
        padding: width * 0.05,
        // alignItems:'center',
    },
    headings: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
    },
    attendanceItem: {
        marginVertical: 20,
        // width: '100%',
        // marginLeft: '1%',
    },
    attendance: {
        backgroundColor: colors.white,
        marginBottom: 20,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
        elevation: 4,
    },
    date: {
        width: '20%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginRight: '3%',

    },
    punchIn: {
        width: '33%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#484A4B',
        borderRightWidth: 1,


    },
    punchOut: {
        width: '36%',
        paddingLeft: 25,
        paddingVertical: 5,

    },
    punchHead: {
        color: 'black',
        fontWeight: '600',
        fontSize: 13,
        marginBottom: 5,

    },
    dateData: {
        color: 'black',
        alignContent: "center",
        textAlign: 'left',
        // marginBottom:5,
    },


});
