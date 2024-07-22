import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../style/Colors';
import BottomTabNavigation from './Bottom/BottomTabNavigation';
import HomeScreen from '../screens/Home/HomeScreen';
import Account from '../screens/Account/AccountScreen';
import WalkthroughScreen from '../screens/WalkthroughScreens/WalkthroughScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/Login/LoginScreen';
import MyProfileScreen from '../screens/Account/Profile/MyProfileScreen';
import EditProfileScreen from '../screens/Account/Profile/EditProfileScreen';
import LeaveScreen from '../screens/Account/Leave/LeaveScreen';
// import LeaveScreenScreen from '../screens/Account/Leave/LeaveScreen';
import NewLeaveScreen from '../screens/Account/Leave/NewLeaveScreen';
import MyAttendanceScreen from '../screens/Account/Attendance/MyAttendanceScreen';
import MyAttendanceDetailScreen from '../screens/Account/Attendance/MyAttendanceDetailScreen';
import TimeSheetScreen from '../screens/Account/Attendance/Timesheet/TimeSheetScreen';
import CheckIn from '../screens/Account/Attendance/CheckInOut/CheckIn';
import CheckOut from '../screens/Account/Attendance/CheckInOut/CheckOut';
import CustomerDetailScreen from '../screens/Account/Attendance/CustomerDetailScreen';
import TeamMemberScreen from '../screens/Account/Attendance/TeamMemberScreen';
import CleaningInspectionScreen from '../screens/Account/Attendance/CleaningInspectionScreen';
import PayrollScreen from '../screens/Account/Payroll/PayrollScreen';
import PayslipSummaryScreen from '../screens/Account/Payroll/PayslipSummaryScreen';
import SettingScreen from '../screens/Account/Settings/SettingScreen';
import ChangePasswordScreen from '../screens/Account/Settings/ChangePassword/ChangePasswordScreen';
import ViewTaskScreen from '../screens/Home/ViewTaskScreen';
import CompletedJobScreen from '../screens/Home/CompletedJobScreen';
import TaskScreen from '../screens/Task/TaskScreen';
import DetailedCleaningScreen from '../screens/Home/DetailedCleaningScreen';
import StartTaskScreen from '../screens/Task/StartTaskScreen';
import WeeklyTaskScreen from '../screens/WeeklyTask/WeeklyTaskScreen';
import MapScreen from '../screens/Map/MapScreen';
import McsubmissionScreen from '../screens/Account/Leave/McsubmissionScreen';
import DailyTasksScreen from '../screens/Task/DailyTasksScreen';
import PendingJobsScreen from '../screens/Task/PendingJobsScreen';
import CompletedTasksScreen from '../screens/Task/CompletedTasksScreen';
import EarningScreen from '../screens/Account/Earnings/EarningScreen';
import ClaimScreen from '../screens/Account/Claims/ClaimScreen';
import NewClaimScreen from '../screens/Account/Claims/NewClaimScreen';
import NotificationScreen from '../screens/Account/Settings/NotificationScreen';
import ForgetPasswordScreen from '../screens/Account/Settings/ChangePassword/ForgetPasswordScreen';
import EnterCodeScreen from '../screens/Account/Settings/ChangePassword/EnterCodeScreen';
import ResetPasswordScreen from '../screens/Account/Settings/ChangePassword/ResetPasswordScreen';
import RemarkScreen from '../screens/Home/RemarkScreen';
import CustomerReviewScreen from '../screens/Home/CustomerReviewScreen';
import CleaningImagesScreen from '../screens/Home/CleaningImagesScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import PunchInScreen from '../screens/PunchScreens/PunchInScreen';
import PunchOutScreen from '../screens/PunchScreens/PunchOutScreen';
import EndTaskScreen from '../screens/Task/EndTaskScreen';
import ReviewScreen from '../screens/Review/ReviewScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import HRScreen from '../screens/HR/HRScreen';
import Monthly from '../screens/Account/Attendance/Monthly';
import Daily from '../screens/Account/Attendance/Daily';
import FullDayLeave from '../screens/Account/Leave/FullDayLeave';
import HalfDayLeave from '../screens/Account/Leave/HalfDayLeave';
import { getStorageData } from '../../utils/helper';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [auth, setAuth] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const getData = await getStorageData();
      if (getData) {
        setAuth(getData.token);
        console.log(getData.token, 'auth')
      }
      setLoad(false);
    } catch (error) {
      console.log('Initiate data error');
      setLoad(false);
    }
  };


  return (
    load === false ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName={
          // 'LoginScreen'
          auth !== '' ? 'BottomTabNavigation' : 'LoginScreen'
        }>
        <Stack.Screen name="CleaningInspectionScreen" component={CleaningInspectionScreen} />
        <Stack.Screen name="McsubmissionScreen" component={McsubmissionScreen} />
        <Stack.Screen name="TeamMemberScreen" component={TeamMemberScreen} />
        <Stack.Screen name="TimeSheetScreen" component={TimeSheetScreen} />
        <Stack.Screen name="MyAttendanceDetailScreen" component={MyAttendanceDetailScreen} />
        <Stack.Screen name="MyAttendanceScreen" component={MyAttendanceScreen} />
        <Stack.Screen name="NewLeaveScreen" component={NewLeaveScreen} />
        <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="LeaveScreen" component={LeaveScreen} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="CustomerDetailScreen" component={CustomerDetailScreen} />
        <Stack.Screen name="Payroll" component={PayrollScreen} />
        <Stack.Screen name="PayslipSummary" component={PayslipSummaryScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="ViewTaskScreen" component={ViewTaskScreen} />
        <Stack.Screen name="CompletedJobScreen" component={CompletedJobScreen} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="DetailedCleaningScreen" component={DetailedCleaningScreen} />
        <Stack.Screen name="StartTaskScreen" component={StartTaskScreen} />
        <Stack.Screen name="WeeklyTaskScreen" component={WeeklyTaskScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="DailyTasksScreen" component={DailyTasksScreen} />
        <Stack.Screen name="CompletedTasksScreen" component={CompletedTasksScreen} />
        <Stack.Screen name="PendingJobsScreen" component={PendingJobsScreen} />
        <Stack.Screen name="EarningScreen" component={EarningScreen} />
        <Stack.Screen name="ClaimScreen" component={ClaimScreen} />
        <Stack.Screen name="NewClaimScreen" component={NewClaimScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="RemarkScreen" component={RemarkScreen} />
        <Stack.Screen name="CustomerReviewScreen" component={CustomerReviewScreen} />
        <Stack.Screen name="CleaningImagesScreen" component={CleaningImagesScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="PunchInScreen" component={PunchInScreen} />
        <Stack.Screen name="PunchOutScreen" component={PunchOutScreen} />
        <Stack.Screen name="EndTaskScreen" component={EndTaskScreen} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="HRScreen" component={HRScreen} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="FullDayLeave" component={FullDayLeave} />
        <Stack.Screen name="HalfDayLeave" component={HalfDayLeave} />
      </Stack.Navigator>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }} >
        <ActivityIndicator size="large" color={Colors.brand_primary} />
      </View>
    )
  );
};

export default AppNavigation;
