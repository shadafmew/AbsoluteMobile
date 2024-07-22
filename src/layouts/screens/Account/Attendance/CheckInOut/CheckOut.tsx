import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
import colors from '../../../../style/Colors';

const { width, height } = Dimensions.get('window');
interface Props { }
const CheckOut: FC<Props> = (): JSX.Element => {


  interface Check {
    id: string;
    time: string;
  }
  const check: Check[] = [
    { id: '1', time: '9:35 AM', },
    { id: '2', time: '10:35 AM', },
    { id: '3', time: '9:35 AM', },
    { id: '4', time: '10:35 AM', },
    { id: '5', time: '9:35 AM', },
    { id: '6', time: '10:35 AM', },
    { id: '7', time: '9:35 AM', },
    { id: '8', time: '10:35 AM', },
  ];
  const renderItem = ({ item }: { item: Check }) => (
    <View style={styles.checkInView}>
      <Text style={styles.checkInText}>Check-Out</Text>
      <Text style={styles.checkInTime}>{item.time}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
      {/* <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-Out</Text>
        <Text style={styles.checkInTime}>9:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-ut</Text>
        <Text style={styles.checkInTime}>12:25 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-Out</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View> */}
      {/* <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>9:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>12:25 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>12:00 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>12:00 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>12:00 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View>
      <View style={styles.checkInView}>
        <Text style={styles.checkInText}>Check-In</Text>
        <Text style={styles.checkInTime}>01:45 AM</Text>
      </View> */}
      {/* </ScrollView > */}
      <FlatList
        data={check}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: width * 0.999,
    backgroundColor: colors.ChechIn_bg,
    elevation: 5,
    //   flex:1
  },
  checkInView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.gray_font_color,
    borderBottomWidth: 0.5,
    paddingVertical: 12,
    marginHorizontal: 15,
  },
  checkInText: {
    color: colors.gray_font_color,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  checkInTime: {
    color: colors.ChechIn_time,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',

  },
  scrollViewContent: {
    // flexGrow: 1,
    //   backgroundColor:'red',
    // marginBottom:50
  },
})
