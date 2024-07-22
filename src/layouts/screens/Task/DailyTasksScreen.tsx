import React from 'react';
import { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import CalendarStrip from 'react-native-calendar-strip';


const { width } = Dimensions.get('window');
interface Props { }
const DailyTasksScreen: FC<Props> = ({navigation}:any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Appbar title={'Task'} navigation={navigation}  />
            <ScrollView>
                <View style={{ paddingBottom: 30 }}>
                    <View>
                        <CalendarStrip style={styles.calendar}	
                        calendarHeaderStyle={{ color: 'black' }}
                        dateNumberStyle={{ color: 'black' }}
                        dateNameStyle={{ color: 'black' }}
                        highlightDateNumberStyle={{ color: 'black' }}
                        highlightDateNameStyle={{ color: 'black' }}
                        highlightDateContainerStyle={{ backgroundColor: 'lightblue' }}
                        />
                        <Text style={styles.heading}>Task</Text>
                        <View>
                            

                            <View style={styles.listViewOngoing}>
                                <Image source={require('../../images/cleaners2.png')} style={styles.image} />
                                <View style={styles.detail}>
                                    <Text style={styles.add}>12/24 Karol Bagh , delhi 110005</Text>
                                    <Text style={styles.status}>On Going</Text>
                                    <View style={styles.earnView}>
                                        <Text style={styles.earning}>Earning</Text>
                                        <Text style={styles.amount}>$321</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listViewPending}>
                                <Image source={require('../../images/cleaners3.png')} style={styles.image} />
                                <View style={styles.detail}>
                                    <Text style={styles.add}>12/24 Karol Bagh , delhi 110005</Text>
                                    <Text style={styles.status}>Pending</Text>
                                    <View style={styles.earnView}>
                                        <Text style={styles.earning}>Earning</Text>
                                        <Text style={styles.amount}>$321</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.listViewUpComing}>
                                <Image source={require('../../images/cleaners4.png')} style={styles.image} />
                                <View style={styles.detail}>
                                    <Text style={styles.add2}>12/24 Karol Bagh , delhi 110005</Text>
                                    <Text style={styles.status2}>Up Coming</Text>
                                    <View style={styles.earnView}>
                                        <Text style={styles.earning2}>Earning</Text>
                                        <Text style={styles.amount2}>$321</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DailyTasksScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        alignSelf: 'center',
    },
    listView: {
        flexDirection: 'row',
        backgroundColor: colors.brand_secondary,
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,

    },
    add: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: colors.brand_primary,

    },
    status: {
        fontFamily: 'Poppins-Medium',
        color: colors.brand_primary,
        fontSize: 14,

    },
    earnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    earning: {
        fontFamily: 'Poppins-Regular',
        color: colors.brand_primary,
        fontSize: 10,

    },
    amount: {
        fontFamily: 'Poppins-Medium',
        color: colors.brand_primary,
        fontSize: 14,
    },
    add2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: colors.white,

    },
    status2: {
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        fontSize: 14,

    },
    earning2: {
        fontFamily: 'Poppins-Regular',
        color: colors.white,
        fontSize: 10,

    },
    amount2: {
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        fontSize: 14,
    },
    image: {
        height: width * 0.25,
        width: width * 0.25,
    },
    detail: {
        width: width * 0.55,
        marginLeft: 10,
    },
    listViewOngoing: {
        flexDirection: 'row',
        backgroundColor: colors.OngGoing,
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,

    },
    listViewPending: {
        flexDirection: 'row',
        backgroundColor: '#D0D0D0',
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        borderColor:'#D0D0D0',
        borderWidth:1,

    },
    listViewUpComing: {
        flexDirection: 'row',
        backgroundColor: colors.brand_primary,
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,

    },
    calendar: {
        height: 120,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:20,
    },
});
