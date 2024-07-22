import React, { useState } from 'react'
import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native'
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopTabNavigation from '../../../navigation/Top/TopTabNavigation';
import Appbar from '../../../Component/Appbar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');
interface ClaimData {
    id: string;
    month: string;
    leaveType: string;
    duration: string;
    status: string;
    type: string;

}

const claimData: ClaimData[] = [
    { id: '1', month: 'March 2023', leaveType: 'Half Day Application', duration: 'Wed, 20 Mar', type: 'Paid', status: 'Awaiting' },
    { id: '2', month: 'Feb 2023', leaveType: 'Full Day Application', duration: 'Wed, 22 Mar', type: 'Paid', status: 'Approved' },
    { id: '3', month: 'April 2023', leaveType: '3 Day Application', duration: 'Wed, 25 Mar', type: 'Un-paid', status: 'Decline' },
    { id: '4', month: 'March 2023', leaveType: 'Half Day Application', duration: 'Wed, 20 Mar', type: 'Paid', status: 'Awaiting' },
    { id: '5', month: 'Feb 2023', leaveType: 'Full Day Application', duration: 'Wed, 22 Mar', type: 'Paid', status: 'Approved' },
    { id: '6', month: 'April 2023', leaveType: '3 Day Application', duration: 'Wed, 25 Mar', type: 'Un-paid', status: 'Decline' },
];






interface Props { }




const ClaimScreen: FC<Props> = ({ navigation }: any): JSX.Element => {


    const renderItem = ({ item }: { item: ClaimData }) => {
        let statusStyle;
        switch (item.status) {
            case 'Approved':
                statusStyle = styles.approvedView;
                break;
            case 'Decline':
                statusStyle = styles.declineView;
                break;
            case 'Awaiting':
            default:
                statusStyle = styles.awaitingView;
                break;
        }

        return (
            <View style={styles.leaveDetail}>
                <View style={styles.leaveDetailTop}>
                    <View>
                        <Text style={styles.leaveDuration}>{item.leaveType}</Text>
                        <Text style={styles.leaveDate}>{item.duration}</Text>
                    </View>
                    <View>
                        <Text style={statusStyle}>{item.status}</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Text style={item.status === 'Decline' ? styles.sick : styles.casual}>{item.type}</Text>
                    <TouchableOpacity style={styles.arrowButton}>
                        <MaterialIcons name="keyboard-arrow-right" color={colors.black} size={23} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }



    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View style={styles.leaveTop}>
                    <Text>      </Text>
                    <Text style={styles.head}>Claims</Text>
                    <TouchableOpacity style={styles.addLeave} onPress={() => navigation.navigate('NewClaimScreen')}>
                        <MaterialCommunityIcons name="plus" color={colors.white} size={23} />
                    </TouchableOpacity>
                </View>
                <View style={styles.InnerContainer}>
                    <View style={styles.leaveSection}>
                        <Text style={styles.month}>March 2023</Text>

                        <FlatList
                            data={claimData}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ClaimScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
        // marginBottom: 20,
    },
    head: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        // paddingTop: 20,

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
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },
    InnerContainer: {
        margin: 15,
    },
    leaveSection: {
        // marginVertical: 10,
    },
    leaveDetail: {
        backgroundColor: colors.white,
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        elevation: 8,

    },
    leaveDetailTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowButton: {
        backgroundColor: colors.back_btn_bg,
        borderRadius: 5
    },
    awaitingView: {
        backgroundColor: colors.orange_bg,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        color: colors.awaiting_text,
    },
    approvedView: {
        backgroundColor: colors.bg_green,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        color: colors.text_green,
    },
    declineView: {
        backgroundColor: colors.red,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 13,
        paddingVertical: 3,
        borderRadius: 8,
        color: colors.white,
    },
    leaveDuration: {
        color: colors.gray_font_color,
        fontSize: 10,

    },
    leaveDate: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 12,
    },
    month: {
        color: colors.gray_font_color,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    casual: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
    },
    sick: {
        color: colors.gray_font_color,
        fontSize: 14
    },
})

