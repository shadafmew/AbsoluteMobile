import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Appbar from '../../../Component/Appbar';
import { getStorageData, postMethod } from '../../../../utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';




const { width, height } = Dimensions.get('window');

interface Props { }
const SettingScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        getStoredData();
      }, []);
    
      const getStoredData = async () => {
        try {
          const storedData = await getStorageData();
          setUserDetails(storedData)
          // console.log("logout stored-data", storedData)
    
        }
        catch (error) {
          console.log('Error retrieving images:', error);
        }
      };
    const LogOut = async () => {
        try {
          const api: any = await postMethod('logout');
          if (api.status === 200) {
    
            console.log("Logout", api.data);
            await AsyncStorage.removeItem('user_data');
            navigation.reset({
              routes: [{ name: 'Login' }]
            })
          } else {
            Snackbar.show({
              text: api.data.message,
              duration: Snackbar.LENGTH_SHORT,
              textColor: '#AE1717',
              backgroundColor: '#F2A6A6',
            });
          }
        }
        catch (e) {
          Snackbar.show({
            text: "Some Error Occured ->" + e,
            duration: Snackbar.LENGTH_SHORT,
            textColor: '#AE1717',
            backgroundColor: '#F2A6A6',
          });
        }
    
      }

    return (
        <>
            <Appbar navigation={navigation} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.outer}>


                        {/* OPTIONS========================== */}
                        <View style={styles.optionView} >
                            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('MyProfileScreen')}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/my-profile.png')} style={styles.profileImage} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* OPTIONS========================== */}
                         
                        {/* OPTIONS========================== */}
                        <TouchableOpacity style={styles.optionView}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/language-icon.png')} style={styles.iconImage} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Language</Text>
                                    <Text style={styles.optionsText2}>English</Text>
                                </View>
                            </View>
                            <View style={styles.iconView}>
                                <IonIcon name="chevron-forward" color={colors.gray} size={20} onPress={() => navigation.navigate('Language')} />
                            </View>
                        </TouchableOpacity>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <TouchableOpacity style={styles.optionView}
                            onPress={() => navigation.navigate('ChangePasswordScreen')}
                        >
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/change-password.png')} style={styles.password} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Change Password</Text>
                                    {/* <Text style={styles.optionsText2}>English</Text> */}
                                </View>
                            </View>
                            <View style={styles.iconView}>
                                <IonIcon name="chevron-forward" color={colors.gray} size={20} onPress={() => navigation.navigate('Language')} />
                            </View>
                        </TouchableOpacity>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <TouchableOpacity style={styles.optionView}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/location-icon.png')} style={styles.location} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Location</Text>
                                    <Text style={styles.optionsText2}>Allow</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <TouchableOpacity style={styles.optionView} onPress={() => navigation.navigate('NotificationScreen')}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/bell-image.png')} style={styles.bellImage} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Notification</Text>
                                </View>
                            </View>
                            {/* <View style={styles.iconView}>
                <IonIcon name="chevron-forward" color={colors.gray} size={20} onPress={() => navigation.navigate('Language')} />
            </View> */}
                        </TouchableOpacity>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <View style={styles.optionView}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/help.png')} style={styles.help} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Help center</Text>
                                </View>
                            </View>

                        </View>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <View style={styles.optionView}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/general.png')} style={styles.help} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>General</Text>
                                </View>
                            </View>

                        </View>
                        {/* OPTIONS========================== */}


                        {/* OPTIONS========================== */}
                        <View style={styles.optionView}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/info-icon.png')} style={styles.help} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>About us</Text>
                                </View>
                            </View>

                        </View>
                        {/* OPTIONS========================== */}

                        {/* OPTIONS========================== */}
                        <View style={styles.optionView}>
                            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => LogOut()}>
                                <View style={styles.iconDiv}>
                                    <Image source={require('../../../images/logout.png')} style={styles.help} />
                                </View>
                                <View style={styles.options}>
                                    <Text style={styles.optionsText}>Log Out</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* OPTIONS========================== */}


                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IonIcon name="close-circle" color={colors.black} size={40} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView >
            </View >
        </>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,

    },
    bg: {
        height: width * 0.48
    },
    backArrow: {
        marginLeft: 10,
        marginTop: 10
    },
    head: {
        color: colors.white,
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.3,
        alignSelf: 'center',
        marginTop: 20,
    },
    iconImage: {
        height: 35,
        width: 35,

        marginTop: 3
    },
    password: {
        height: 25,
        width: 25,
        marginLeft: 5,
        marginTop: 3
    },
    location: {
        height: 22,
        width: 15,
        marginLeft: 9,
        marginTop: 7,
    },
    bellImage: {
        width: 20,
        height: 20,
        marginLeft: 7,
        marginTop: 3,
    },
    profileImage: {
        width: 25,
        height: 25,
        marginLeft: 7,
        marginTop: 3,
    },
    help: {
        height: 20,
        width: 20,
        marginLeft: 7,

        marginTop: 3,
    },
    options: {
        justifyContent: 'center',
    },
    optionsText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: colors.black,

    },
    optionsText2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        color: colors.gray
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionView: {
        height: width * 0.125,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5,
        paddingVertical: 5,
        alignItems: 'center',
    },
    materialView: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomColor: colors.gray,
        // borderBottomWidth: 0.5,
        paddingVertical: 5,
        alignItems: 'center',
    },
    iconDiv: {
        width: width * 0.15,
    },
    closeIcon: {
        alignSelf: 'center',
        // width: width * 0.12,
        marginTop: 20,
    },
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsInnerView: {
        flexDirection: 'row',
        marginRight: 10,
    },
    outer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: colors.white,
        marginVertical: 30,
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 8,
    }
})
