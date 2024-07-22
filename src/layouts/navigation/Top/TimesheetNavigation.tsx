import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, PixelRatio, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import CheckIn from '../screens/Account/Profile/CheckIn';
// import CheckOut from '../screens/Account/Profile/CheckOut';
// import FaceCheckIn from '../screens/Account/Profile/FaceCheckIn';
import CheckOut from '../../screens/Account/Attendance/CheckInOut/CheckOut';
import CheckIn from '../../screens/Account/Attendance/CheckInOut/CheckIn';
import CustomTimesheetBar from './CustomTimesheetBar';

const TabTop = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');
const TimesheetNavigation = () => {
    return (
        <>
            <TabTop.Navigator
                tabBar={(props: any) => <CustomTimesheetBar {...props}
                // date={date}
                />}
            >
                <TabTop.Screen name="CheckIn" component={CheckIn}
                    options={{ tabBarLabel: 'Check In' }} />
                <TabTop.Screen name="CheckOut" component={CheckOut}
                    options={{ tabBarLabel: 'Check Out' }} />
            </TabTop.Navigator>
        </>
    )
}

export default TimesheetNavigation

const styles = StyleSheet.create({})