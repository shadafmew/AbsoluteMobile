import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, PixelRatio, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTopTabBar from './CustomTopTabBar';
import AllLeaves from '../../screens/Account/Leave/AllLeavesScreen';
import SickLeave from '../../screens/Account/Leave/SickLeaveScreen';
import CasualLeave from '../../screens/Account/Leave/CasualLeaveScreen';
import McsubmissionScreen from '../../screens/Account/Leave/McsubmissionScreen';
import McSubmission from '../../screens/Account/Leave/McSubmission';



const TabTop = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');
const TopTabNavigation = () => {
    return (
        <>
            <TabTop.Navigator
                tabBar={(props: any) => <CustomTopTabBar {...props}
                />}
            >
                <TabTop.Screen name="AllLeaves" component={AllLeaves}
                    options={{ tabBarLabel: 'All' }} />
                <TabTop.Screen name="McSubmission" component={McSubmission}
                    options={{ tabBarLabel: 'MC' }} />
                {/* <TabTop.Screen name="McsubmissionScreen" component={McsubmissionScreen}
                    options={{ tabBarLabel: 'MC' }} /> */}
            </TabTop.Navigator>
        </>
    )
}

export default TopTabNavigation

const styles = StyleSheet.create({
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
})