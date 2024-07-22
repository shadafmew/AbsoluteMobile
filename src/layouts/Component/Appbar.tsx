import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../style/Colors';


const { width, height } = Dimensions.get('window');

const Appbar = ({ navigation, title }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <IonIcon name="chevron-back-outline" color={colors.brand_primary} size={30} onPress={() => navigation.goBack()} />
                <Image source={require('../images/logo.png')} style={styles.logo} />
                <View style={styles.align}>
                    <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')} >
                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')} style={styles.bell}>
                        <MaterialCommunityIcons name="bell" color={colors.brand_primary} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Appbar;
const styles = StyleSheet.create({
    align: {
        flexDirection: 'row',
    },
    title: {
        color: colors.brand_primary,
        fontSize: 22,
        fontFamily: 'Poppins-Medium',

    },
    bell: {
        marginLeft: 10
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 18,
        paddingVertical: 15,
        elevation: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 10,
        borderBottomColor: colors.lightGray,
        borderWidth: 2,
        borderRightColor:colors.lightGray,
        borderRightWidth: 1,
        borderLeftColor:colors.lightGray,
        borderLeftWidth: 1,
        width:width*1


    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    logo: {
        height: width * 0.15,
        width: width * 0.2,
    },
})