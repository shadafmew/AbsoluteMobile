import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { FC } from 'react'
import colors from '../../../style/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


interface LeaveData {
  id: string;
  month: string;
  leaveType: string;
  duration: string;
  status: string;
  type: string;

}

const leaveData: LeaveData[] = [
  { id: '1', month: 'March 2023', leaveType: 'Half Day Application', duration: 'Wed, 20 Mar', type: 'Paid', status: 'Awaiting' },
  { id: '2', month: 'Feb 2023', leaveType: 'Full Day Application', duration: 'Wed, 22 Mar', type: 'Paid', status: 'Approved' },
  { id: '3', month: 'April 2023', leaveType: '3 Day Application', duration: 'Wed, 25 Mar', type: 'Un-paid', status: 'Decline' },

];


interface Props { }
const AllLeaves: FC<Props> = ({ navigation }: any): JSX.Element => {

  const renderItem = ({ item }: { item: LeaveData }) => {
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
      <ScrollView>
        <View>
          <View>
            <View style={styles.leaveSection}>
              <Text style={styles.month}>March 2023</Text>
              <FlatList
                data={leaveData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{ marginVertical: 10 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllLeaves;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brand_secondary,
    flex: 1,
  },
  month: {
    color: colors.gray_font_color,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  leaveDetail: {
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 8,

  },
  leaveSection: {
    marginVertical: 10,
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
  // awaitingView: {
  //   backgroundColor: colors.orange_bg,
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 10,
  //   paddingVertical: 3,
  //   borderRadius: 8,
  //   color: colors.awaiting_text,
  // },
  // approvedView: {
  //   backgroundColor: colors.bg_green,
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 10,
  //   paddingVertical: 3,
  //   borderRadius: 8,
  //   color: colors.text_green,
  // },
  // declineView: {
  //   backgroundColor: colors.bg_pink,
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 10,
  //   paddingVertical: 3,
  //   borderRadius: 8,
  //   color: colors.text_pink,
  // },

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
    backgroundColor: colors.bg_pink,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    color: colors.text_pink,
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
  casual: {
    color: colors.text_orange,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  sick: {
    color: colors.gray_font_color,
    fontSize: 14
  },
  leaveDuration: {
    color: colors.gray_font_color,
    fontSize: 10,

  },
  leaveDate: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 15,
  }
})
