import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions, FlatList } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from '../../../style/Colors';


const { width, height } = Dimensions.get('window');




interface MonthlyData {
    id: string;
    month: string;
    totalWorkingDays: number;
    presentDays: number;
    officialLeaves: number;
}

const monthlyData: MonthlyData[] = [
    { id: '1', month: 'Jan 2023', totalWorkingDays: 27, presentDays: 27, officialLeaves: 4 },
    { id: '2', month: 'Dec 2022', totalWorkingDays: 21, presentDays: 21, officialLeaves: 10 },
    { id: '3', month: 'Nov 2022', totalWorkingDays: 15, presentDays: 15, officialLeaves: 15 },
    { id: '4', month: 'Oct 2022', totalWorkingDays: 15, presentDays: 15, officialLeaves: 15 },
    
    // Add more months as needed
];




interface Props { }
const Monthly: FC<Props> = ({ navigation }: any): JSX.Element => {


    const renderItem = ({ item }: { item: MonthlyData }) => (
        <View style={styles.box}>
            <Text style={styles.date}>{item.month}</Text>
            <View style={styles.attendanceBox2}>
                <View style={styles.progressView}>
                    <AnimatedCircularProgress
                        size={70}
                        width={3}
                        fill={(item.presentDays / item.totalWorkingDays) * 100}
                        tintColor="#062A5E"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor={colors.brand_secondary}>
                        {(fill) => (
                            <View>
                                <Text style={styles.days}>{item.presentDays} days</Text>
                                <Text style={styles.days}>Present</Text>
                            </View>
                        )}
                    </AnimatedCircularProgress>
                </View>
                <View style={styles.attendanceDetail}>
                    <Text style={styles.heading}>Total Working days</Text>
                    <Text style={styles.text}>{item.totalWorkingDays} Days</Text>
                    <Text style={styles.heading}>Official Leaves</Text>
                    <Text style={styles.text}>{item.officialLeaves} Days</Text>
                </View>
            </View>
        </View>
    );



    return (
        <View style={styles.container}>
            <Text style={styles.headings}>Monthly Attendance</Text>
            <ScrollView>

                <FlatList
                    data={monthlyData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ marginTop: 20, marginHorizontal: width * 0.05 }}
                />
                {/* <View style={styles.box}>
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
                </View>
                <View style={{ marginTop: 20, marginHorizontal: width * 0.05, }}>
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
                </View>
                <View style={{ marginTop: 20, marginHorizontal: width * 0.05, }}>
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
                </View> */}
            </ScrollView>
        </View>
    );
};

export default Monthly;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brand_secondary,
        paddingBottom: 30,
        paddingTop: width * 0.05,

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
    box: {
        marginTop: 20,
        marginHorizontal: width * 0.05,
    },
    backArrow: {
        marginTop: 20,
        marginLeft: 20,
    },
    attendanceView: {
        padding: 20,
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
});
