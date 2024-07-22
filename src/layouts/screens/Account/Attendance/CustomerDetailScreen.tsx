import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Appbar from '../../../Component/Appbar';
import colors from '../../../style/Colors';
import { TextInput } from 'react-native-paper';
import CalendarPicker from 'react-native-calendar-picker';
import IonIcon from 'react-native-vector-icons/Ionicons';



const { width } = Dimensions.get('window')
interface Props { }
const CustomerDetailScreen: FC<Props> = ({navigation}:any): JSX.Element => {

  const [showCalendarPicker, setShowCalendarPicker] = useState<boolean>(false);

  const toggleCalendar = () => {
    setShowCalendarPicker(!showCalendarPicker);
  };

  const getCalendarButtonText = () => {
    return showCalendarPicker ? 'Close calendar' : 'Select date';
  };

  return (
    <View style={styles.container}>
      <Appbar navigation={navigation} />
      <ScrollView>
        <View style={styles.detailSection}>
          <View style={styles.detailSectionInner}>
            <View style={styles.rowSection}>
              <Image source={require('../../../images/user.png')} style={styles.icon} />
              <Text style={styles.name}>Richard Mare</Text><Text style={styles.star}>*</Text>
            </View>
            <TextInput
              activeUnderlineColor={colors.lightGray}
              placeholder='Tap here to edit'
              underlineColor={colors.white}
              placeholderTextColor={colors.gray}
              // value={value}
              // onChangeText={value => onChange(value)}
              style={styles.textInput}
            // left={<TextInput.Icon icon="lock-outline" color={colors.gray} />}
            />
          </View>

          <View style={styles.detailSectionInner}>
            <View style={styles.rowSection}>
              <Image source={require('../../../images/date-n-time.png')} style={styles.iconCalendar} />
              <Text style={styles.name}>Date & Time</Text><Text style={styles.star}>*</Text>
            </View>

            <TouchableOpacity style={styles.calendarBtn} onPress={toggleCalendar}>
              <Text style={styles.calendarBtnText}>{getCalendarButtonText()}</Text>
              <IonIcon name="calendar-outline" size={18} color={colors.white} />
            </TouchableOpacity>

            {showCalendarPicker && (
              <CalendarPicker
                previousTitleStyle={{ color: 'black' }}
                nextTitleStyle={{ color: 'black' }}
                width={width * 0.8}
                height={width * 0.9}
              // onDateChange={onDateChange}
              />
            )}

          </View>

          <View style={styles.detailSectionInner}>
            <View style={styles.rowSection}>
              <Image source={require('../../../images/address-icon.png')} style={styles.icon} />
              <Text style={styles.name}>Address</Text><Text style={styles.star}>*</Text>
            </View>
            <TextInput
              activeUnderlineColor={colors.lightGray}
              placeholder='Tap here to edit'
              underlineColor={colors.white}
              placeholderTextColor={colors.gray}
              // value={value}
              // onChangeText={value => onChange(value)}
              style={styles.textInput}
            // left={<TextInput.Icon icon="lock-outline" color={colors.gray} />}
            />
          </View>

        </View>
        <View style={styles.supervisor}>
          <Text style={styles.supervisor_text}>Supervisor</Text>
        </View>

        <TouchableOpacity style={styles.team} onPress={() => navigation.navigate('TeamMemberScreen')}>
          <Text style={styles.seri}>Seri (Team A)</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CustomerDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  detailSection: {
    backgroundColor: colors.back_btn_bg,
    padding: 20,
  },
  detailSectionInner: {
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: '#F1F7FF',
    marginVertical: 10,
    elevation: 8,
  },
  rowSection: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: width * 0.1,
    height: width * 0.07,
    width: width * 0.0555,
  },
  name: {
    color: colors.name,
    letterSpacing: 2,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  star: {
    color: colors.red,
    marginLeft: 3,
  },
  iconCalendar: {
    height: width * 0.08,
    width: width * 0.09,
    marginRight: width * 0.1,
  },
  calendarBtn: {
    backgroundColor: colors.Datebg_green,
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarBtnText: {
    color: colors.white,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginRight: 10,
  },
  supervisor: {
    padding: 18,
  },
  supervisor_text: {
    fontSize: 20,
    color: colors.name,
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  team: {
    backgroundColor: colors.back_btn_bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    elevation: 5,
    marginBottom: 50,
  },
  seri: {
    fontFamily: 'Poppins-Medium',
    color:colors.name,
  },
});
