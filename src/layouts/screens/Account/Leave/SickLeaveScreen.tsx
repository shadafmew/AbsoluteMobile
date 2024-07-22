import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../../style/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




interface Props { }
const SickLeave: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* AWAITING VIEW================ */}
      <View style={styles.leaveDetail}>
        <View style={styles.leaveDetailTop}>
          <View>
            <Text style={styles.leaveDuration}>Half Day Application</Text>
            <Text style={styles.leaveDate}>Wed, 20 Mar</Text>
          </View>
          <View>
            <Text style={styles.awaitingView}>Awaiting</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.casual}>Sick</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <MaterialIcons name="keyboard-arrow-right" color={colors.black} size={23} />
          </TouchableOpacity>
        </View>
      </View>
      {/* AWAITING VIEW ENDED========== */}
      {/* AWAITING VIEW================ */}
      <View style={styles.leaveDetail}>
        <View style={styles.leaveDetailTop}>
          <View>
            <Text style={styles.leaveDuration}>Half Day Application</Text>
            <Text style={styles.leaveDate}>Wed, 20 Mar</Text>
          </View>
          <View>
            <Text style={styles.awaitingView}>Awaiting</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.casual}>Sick</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <MaterialIcons name="keyboard-arrow-right" color={colors.black} size={23} />
          </TouchableOpacity>
        </View>
      </View>
      {/* AWAITING VIEW ENDED========== */}
      {/* AWAITING VIEW================ */}
      <View style={styles.leaveDetail}>
        <View style={styles.leaveDetailTop}>
          <View>
            <Text style={styles.leaveDuration}>Half Day Application</Text>
            <Text style={styles.leaveDate}>Wed, 20 Mar</Text>
          </View>
          <View>
            <Text style={styles.awaitingView}>Awaiting</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.casual}>Sick</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <MaterialIcons name="keyboard-arrow-right" color={colors.black} size={23} />
          </TouchableOpacity>
        </View>
      </View>
      {/* AWAITING VIEW ENDED========== */}
    </View>
  );
};

export default SickLeave;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6FAFF',

  },
  leaveDetail: {
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 10,

  },
 leaveDetailTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaveDuration: {
    color: colors.gray,
  },
  leaveDate: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 15,
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
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowButton: {
    backgroundColor: colors.back_btn_bg,
    borderRadius: 5
  },
  casual: {
    color: colors.red,
    fontSize: 14
  },
});
