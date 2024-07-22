import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Appbar from '../../../Component/Appbar';


const { width, height } = Dimensions.get('window');

interface Props { }
const PayrollScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    interface Pay {
        id: string;
        month:string;
        earning: string;

    }
    const pay: Pay[] = [
        { id: '1', month: 'Oct', earning: '3900' },
        { id: '2', month: 'Nov', earning: '3600' },
        { id: '3', month: 'Dec', earning: '5400' },
        { id: '4', month: 'Jan', earning: '6600' },
        { id: '5', month: 'Feb', earning: '2100' },
        { id: '6', month: 'Mar', earning: '5600' },
    ];
    
    const renderItem = ({ item }: { item: Pay }) => (
        <TouchableOpacity style={styles.detail} onPress={() => navigation.navigate('PayslipSummary')}>
            <View>
                <Image source={require('../../../images/calendar-img.png')} style={styles.calendar} />
            </View>
            <View style={styles.detailsSection}>
                <View>
                    <Text style={styles.month}>{item.month}</Text>
                </View>
                <View>
                    <Text style={styles.amount}>${item.earning}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView style={styles.detailOuter}>
                <Text style={styles.head}>Payslip</Text>
                <FlatList
                    data={pay}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
    );
};

export default PayrollScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    welcome: {
        color: colors.white,
        marginTop: 5,
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
    },
    name: {
        color: colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
    },
    head: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 15,

    },
    attendBox1: {
        height: width * 0.45,
        paddingLeft: 30,
        paddingTop: 15,
        backgroundColor: colors.brand_primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backArrow: {
    },
    payHead: {
        color: colors.white,
        fontSize: 22,
        alignSelf: 'center',
        width: width * 0.25,
        fontFamily: 'Poppins-Medium',
    },
    detailOuter: {
        marginTop: 30,
    },
    outerView: {
        marginVertical: 30,
        borderTopColor: colors.gray_font_color,
        borderTopWidth: 0.5,
        // elevation: 8
    },
    detail: {
        width: width * 0.9,
        flexDirection: 'row',
        padding: 12,
        borderBottomColor: colors.gray_font_color,
        borderBottomWidth: 0.5,
        backgroundColor: colors.white,
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 8,
    },
    calendar: {
        height: 26,
        width: 25,
        marginRight: 20,
        marginTop: 7,
    },
    detailsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.65,
        alignSelf: 'center',
        alignItems:'center',
        marginTop: 8,
        paddingBottom: 5,


    },
    month: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    date: {
        color: colors.gray_font_color,
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
    },
    amount: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        // marginTop: 5

    },
})








