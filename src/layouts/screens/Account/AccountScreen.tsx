import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from '../../style/Colors';
import { List } from 'react-native-paper';
import Appbar from '../../Component/Appbar';


const { width, height } = Dimensions.get('window');

interface Props { }
const AccountScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
  return (
    <>
      <Appbar navigation={navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profileContainer}>
            <Image source={require('../../images/avatar1.png')} style={styles.profileImage} />
            <Text style={styles.name}>John Henry</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('MyAttendanceScreen')}>
              <Image source={require('../../images/attendance.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('EarningScreen')}>
              <Image source={require('../../images/earnings.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Earnings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('LeaveScreen')}>
              <Image source={require('../../images/leave.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Leave</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Payroll')}>
              <Image source={require('../../images/pay-roll.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Payroll</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('McsubmissionScreen')}>
              <Image source={require('../../images/mc-submission.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Mc submission</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('ClaimScreen')}>
              <Image source={require('../../images/claim.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Claim</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.accountText}>ACCOUNT</Text>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('MyProfile')}>
              <Image source={require('../../images/my-profile.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('SettingScreen')}>
              <Image source={require('../../images/setting.png')} style={styles.iconImage} />
              <Text style={styles.btnText}>Settings</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand_secondary,
    padding: 20,
  },
  profileContainer: {
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    width: width * 0.7,
    alignSelf: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'red',
  },
  profileImage: {
    height: width * 0.35,
    width: width * 0.26,
  },
  name: {
    color: colors.brand_primary,
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: 22,
    alignSelf: 'center',

  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 3
  },
  icon: {
    marginRight: 10,

  },
  btnText: {
    color: colors.brand_primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    // fontWeight: '600',
  },
  iconImage: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  iconImageSub: {
    height: 24,
    width: 22,
    marginRight: 10,
  },
  horizontalLine: {
    borderBottomColor: colors.brand_primary, // Change the color as needed
    borderBottomWidth: 1, // Adjust the width as needed
    marginVertical: 20, // Adjust the margin as needed
  },
  accountText: {
    color: colors.red,
    fontFamily: 'Poppins-Medium',
    marginBottom: 5,

  }
})
