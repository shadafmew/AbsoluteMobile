import React from 'react';
import { FC } from 'react';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../style/Colors';
import Appbar from '../../../Component/Appbar';


const { width, height } = Dimensions.get('window');

interface Props { }
const MyProfileScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <>
            <Appbar navigation={navigation} />

            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image source={require('../../../images/profile.png')} style={styles.profile} />
                </View>
                <ScrollView>
                    <View style={styles.details}>
                        <View style={styles.topView}>
                            <Text style={styles.idNo}>ID: 95 259105</Text>
                            <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfile')}>
                                <Text style={styles.editBtnText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>User name</Text>
                                <Text style={styles.labelText}>John Hendry</Text>
                            </View>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>Email address</Text>
                                <Text style={styles.labelText}>Johner@gmail.com</Text>
                            </View>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>Phone</Text>
                                <Text style={styles.labelText}>+65 98566556</Text>
                            </View>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>Gender</Text>
                                <Text style={styles.labelText}>Male</Text>
                            </View>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>Date of Birth</Text>
                                <Text style={styles.labelText}>20/02/1993</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </>
    );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brand_primary,
    },

    align: {
        flexDirection: 'row',
    },
    title: {
        color: colors.white,
        fontSize: 22,
    },
    bell: {
        marginLeft: 20,
    },
    topBar: {
        paddingHorizontal: 18,
        paddingTop: 20,
    },
    appbarView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profile: {
        height: width * 0.38,
        width: width * 0.38,
        alignSelf: 'center',
        // marginTop: width * 0.18,


    },
    details: {
        width: width * 0.9,
        alignSelf: 'center',
        marginBottom: width * 0.07,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,

    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    idNo: {
        color: colors.brand_primary,
        fontSize: 16,
        fontWeight: '800',
    },
    editBtn: {
        backgroundColor: "#7CA942",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 8,
        elevation: 8,
    },
    editBtnText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    label: {
        color: colors.gray_font_color,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        // backgroundColor:'red',
        width: width * 0.37
    },
    labelText: {
        color: colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    labelView: {
        marginVertical: 12,
        flexDirection: 'row',
    },

});
