// import React from 'react';
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FC } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import colors from '../../../style/Colors';
import { Dimensions, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import Appbar from '../../../Component/Appbar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LeaveNavigation from '../../../navigation/Top/Leave/LeaveNavigation';
// import { TextInput } from 'react-native-paper';


const { width, height } = Dimensions.get('window');

interface Props {
}
const NewLeaveScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

  const [selected, setSelected] = useState('am');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [resetCalendar, setResetCalendar] = useState(false); // New state to reset the calendar




  const [isVisible, setIsVisible] = useState(false);

  // ===== function for button 1 ======
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // const AmPmSelector = () => {

  // const handleToggle = (value) => {
  //   setSelected(value);
  // };


  // const handleDateChange = (date) => {
  //   date = new Date(date);

  //   if (selectedStartDate === null || date < selectedStartDate) {
  //     setSelectedStartDate(date);
  //     setSelectedEndDate(null);
  //   } else if (!selectedEndDate || date > selectedEndDate) {
  //     setSelectedEndDate(date);
  //   }
  // };

  const resetSelection = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setResetCalendar(!resetCalendar);
    setSelected('am');
    // setResetCalendar(true); // Trigger a reset of the calendar component
  };


  return (
    <>
            <Appbar navigation={navigation} />

      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Text style={styles.head}>Leave Application</Text>
        </View>
        <View style={styles.newLeaveForm}>
          <View style={styles.section}>
            {/* <Text style={styles.heading}>Type</Text> */}
            <Text style={styles.text}>Leave Type:</Text>
            {/* TOGGLE BUTTON ONE==================== */}
            <View style={styles.btnOne}>
              <TouchableOpacity style={styles.dropDown} onPress={toggleVisibility}>
                {/* <View>
                    <Text style={styles.dropDownText}>Total Hours</Text>
                  </View> */}
                <View style={styles.type}>
                  <Text style={styles.dropDownText}>Annual</Text>
                  {isVisible ? (
                    <IonIcon name="chevron-up" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                  ) : (
                    <IonIcon name="chevron-down" color={colors.black} size={20} style={{ marginLeft: 10 }} />
                  )}
                </View>
              </TouchableOpacity>
              {isVisible && (
                <View style={styles.dropDownView}>
                  <Text style={styles.visibleText}>View is visible!</Text>
                </View>
              )}
            </View>
            {/* TOGGLE BUTTON ONE==================== */}
          </View>
          <View style={styles.section}>
            {/* <Text style={styles.heading}>Cause</Text> */}
            <Text style={styles.text}>Reason:</Text>
            <TextInput
              placeholder='Enter Reason'
              placeholderTextColor={colors.gray}
              style={styles.input}
            />                         
          </View>

        </View>
        <LeaveNavigation />
      </View>
    </>
  );
};

export default NewLeaveScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6FAFF',
    flex: 1,
    padding: 20
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  arrowButton: {
    backgroundColor: colors.white,
    borderRadius: 5,
    alignSelf: 'flex-start',
    padding: 8,
    elevation: 8,

  },
  newLeaveForm: {
    backgroundColor: colors.white,
    marginTop: 30,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    elevation: 8,
  },
  section: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    color: colors.gray,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  text: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',

  },
  toggleButtons: {
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 15
    // color: colors.gray,

  },
  toggleButton: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    color: colors.gray,

  },
  activeToggleButton: {
    backgroundColor: colors.white,
    color: colors.black,

  },
  activeToggleButtonText: {
    color: colors.black,
  },
  timeSelectorText: {
    color: colors.black,

  },
  timeSelector: {
    backgroundColor: '#E1E1E1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginRight: 10,
  },
  saveBtn: {
    backgroundColor: colors.brand_primary,
    alignSelf: 'center',
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 20
  },
  saveBtnText: {
    color: colors.white,
    fontSize: 16,

  },
  top: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,

  },
  bell: {
    marginLeft: 15,
  },
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 10,

  },
  btnOne: {
    // marginHorizontal: 20,

  },
  dropDownView: {
    padding: 10,
    // backgroundColor: colors.textInput_color,
  },
  dropDownText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  visibleText: {
    color: colors.black,
    fontFamily: 'Poppins-Regular'
  },
  type: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    borderColor: colors.gray,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    // marginTop: 6,
    borderRadius: 8,
    paddingVertical: 0,
    paddingLeft: 10,
    width: width * 0.45,


  },
});

