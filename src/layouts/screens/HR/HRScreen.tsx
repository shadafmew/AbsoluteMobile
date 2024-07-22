import React from 'react';
import { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';


const { width, height } = Dimensions.get('window');

interface Props { }
const HRScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Appbar navigation={navigation} />
      <ScrollView>
        <View>
          <View style={styles.profileDetail}>
            <Text style={styles.text}>Hi, Nihar Ergemia</Text>
            <Image source={require('../../images/profile-icon.png')} style={styles.profile} />
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.buttonsFlex}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyAttendanceScreen')}>
                <Image source={require('../../images/hr-calendar.png')} style={styles.btnImage} />
                <Text style={styles.buttonText}>Attendance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LeaveScreen')}>
                <Image source={require('../../images/leave-icon.png')} style={styles.btnImageLeave} />
                <Text style={styles.buttonText}>Leave</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsFlex}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payroll')}>
                <Image source={require('../../images/payslip-image.png')} style={styles.btnImage} />
                <Text style={styles.buttonText}>Payslip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EarningScreen')}>
                <Image source={require('../../images/earning-icon.png')} style={styles.btnImage} />
                <Text style={styles.buttonText}>Earnings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsFlex}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('McsubmissionScreen')}>
                <Image source={require('../../images/mc-submission-icon.png')} style={styles.btnImage} />
                <Text style={styles.buttonText}>MC Submission</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClaimScreen')}>
                <Image source={require('../../images/claims-icon.png')} style={styles.btnImage} />
                <Text style={styles.buttonText}>Claims</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand_secondary
  },
  profileDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems:'center',
    // backgroundColor:'red',
  },
  text: {
    color: colors.black,
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
    // paddingHorizontal: 15,
  },
  profile: {
    height: width * 0.18,
    width: width * 0.18,
  },
  buttonsView: {
    backgroundColor: colors.white,
    // marginTop: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
    elevation: 8,
  },
  buttonsFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: colors.brand_primary,
    alignItems: 'center',
    width: width * 0.4,
    height: width * 0.3,
    justifyContent: 'center',
    borderRadius: 8,
    // flexDirection: 'row',

    

  },
  btnImage: {
    height: width * 0.15,
    width: width * 0.15,
    // backgroundColor:'white',
  },
  btnImageLeave: {
    height: width * 0.15,
    width: width * 0.15,
    backgroundColor: 'white',
  },
  buttonText: {
    color: colors.white
  },
});
