import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';


const { width, height } = Dimensions.get('window')

interface Props { }
const CalendarScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            {/* <Appbar title={'Notifications'} backgroundColor={colors.brand_secondary} navigation={navigation} /> */}
            <Text style={styles.heading}>Calendar</Text>
            <View style={styles.calendarView}>
                {/* <CalendarPicker
                    previousTitleStyle={{ color: 'black' }}
                    nextTitleStyle={{ color: 'black' }}
                    width={width * 0.92}
                    height={height * 1}
                    selectedDayColor={colors.brand_primary}
                    selectedDayTextColor={colors.white}
                /> */}
            </View>
        </View>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    heading: {
        color: colors.brand_primary,
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        marginTop: width * 0.08,

    },
    calendarView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.2,
        borderColor:colors.brand_primary,
        borderWidth:2,
        width:width * 0.9,
        alignSelf:'center',

    }
});
