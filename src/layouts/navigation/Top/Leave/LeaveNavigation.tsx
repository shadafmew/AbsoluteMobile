import React from 'react';
import { FC } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FullDayLeave from '../../../screens/Account/Leave/FullDayLeave';
import HalfDayLeave from '../../../screens/Account/Leave/HalfDayLeave';
import CustomLeaveNavigation from './CustomLeaveNavigation';



const TabTop = createMaterialTopTabNavigator();
interface Props {}
const LeaveNavigation: FC<Props> = (): JSX.Element => {
  return (
    <>
    <TabTop.Navigator
        tabBar={(props: any) => <CustomLeaveNavigation {...props}
        />}
    >
        <TabTop.Screen name="FullDayLeave" component={FullDayLeave}
            options={{ tabBarLabel: 'Full Day' }} />
        <TabTop.Screen name="HalfDayLeave" component={HalfDayLeave}
            options={{ tabBarLabel: 'Half Day' }} />
    </TabTop.Navigator>
</>
);
};

export default LeaveNavigation;

const styles = StyleSheet.create({
  container: {},
});
