import React, { useState } from 'react'
import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopTabNavigation from '../../../navigation/Top/TopTabNavigation';
import Appbar from '../../../Component/Appbar';

const { width, height } = Dimensions.get('window');

interface Props { }
const LeaveScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <>
            <Appbar navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.leaveTop}>
                    <Text>      </Text>
                    <Text style={styles.head}>Leaves</Text>
                    <TouchableOpacity style={styles.addLeave} onPress={() => navigation.navigate('NewLeaveScreen')}>
                        <MaterialCommunityIcons name="plus" color={colors.white} size={23} />
                    </TouchableOpacity>
                </View>
                <TopTabNavigation />
            </View>
        </>
    );
};

export default LeaveScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
        padding: 20,
    },
    head: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
    },
    addLeave: {
        backgroundColor: colors.brand_primary,
        padding: 4,
        borderRadius: 6,
    },
    segmentedBtnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,


    },
    leaveType: {
        backgroundColor: colors.gray,
        borderColor: colors.gray,
        width: width * 0.29,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'       
    },
    btnText: {
        alignSelf: 'center',
        color: colors.gray,
    },
    activeButton: {
        backgroundColor: colors.white,
        borderColor: "white",
        borderRadius: 8,
        elevation: 8
    },
    activeButtonText: {
        color: colors.black,
        fontWeight: '700',
    },
    leaveTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    }
})
