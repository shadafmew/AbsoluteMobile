// import React from 'react';
import { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, PixelRatio, Pressable, ScrollView } from 'react-native';
import CheckIn from '../CheckInOut/CheckIn';
import colors from '../../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CheckOut from '../CheckInOut/CheckOut';
import CustomTimesheetBar from '../../../../navigation/Top/CustomTimesheetBar';
import TimesheetNavigation from '../../../../navigation/Top/TimesheetNavigation';
import Appbar from '../../../../Component/Appbar';

const TabTop = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');

interface Props { }
const TimeSheetScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <>
            <View style={styles.container}>
            <Appbar navigation={navigation} />
                <View style={styles.content_box}>
                    <View style={styles.dateMonth}>
                        <Text style={styles.date}>10</Text>
                        <Text style={styles.month}> Jan, 2023</Text>
                    </View>
                    <View style={styles.timeSheet}>
                        <Text style={styles.time}>TimeSheet</Text>
                    </View>
                </View>
            </View>
            <TimesheetNavigation />
        </>
    );
};

export default TimeSheetScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        // flex:1
    },

    welcome: {
        color: colors.white,
        marginTop: 10,
        fontSize: 12,
    },
    name: {
        color: colors.white,
        fontSize: 18,
    },
    attendBox1: {
        height: 120,
        paddingLeft: 30,
        paddingTop: 15,
        backgroundColor: colors.brand_primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    content_box: {
        padding: 20,
    },
    dateMonth: {
        flexDirection: 'row',
        color: colors.black,
        alignItems: 'center',
    },
    date: {
        fontSize: 20,
        // marginTop:10,
        color: colors.black,
        fontWeight: '700',
    },
    month: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.black,
        // marginTop: 15,
    },
    timeSheet: {
        // marginTop: 10,
        // fontWeight: '500',

    },
    time: {
        fontSize: 18,
        fontFamily:'Poppins-Medium',
        color: colors.black,
        alignSelf:'center',
        marginTop: 10,

    },
});
