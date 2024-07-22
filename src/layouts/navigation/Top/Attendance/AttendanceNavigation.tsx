import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomAttendanceTopBar from './CustomAttendanceTopBar';
import Monthly from '../../../screens/Account/Attendance/Monthly';
import Daily from '../../../screens/Account/Attendance/Daily';



const TabTop = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');
interface Props { }
const AttendanceNavigation: FC<Props> = (): JSX.Element => {
    return (
        <>
            <TabTop.Navigator
                tabBar={(props: any) => <CustomAttendanceTopBar {...props}
                />}
            >
                <TabTop.Screen name="Monthly" component={Monthly}
                    options={{ tabBarLabel: 'Monthly' }} />
                <TabTop.Screen name="Daily" component={Daily}
                    options={{ tabBarLabel: 'Daily' }} />
            </TabTop.Navigator>
        </>
    );
};

export default AttendanceNavigation;

const styles = StyleSheet.create({
    container: {},
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.3, // Adjust the height as needed
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
