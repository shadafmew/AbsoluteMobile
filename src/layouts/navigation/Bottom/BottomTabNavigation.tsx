
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import colors from '../../style/Colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TaskScreen from '../../screens/Task/TaskScreen';
import AccountScreen from '../../screens/Account/AccountScreen';
import ProjectScreen from '../../screens/Project/ProjectScreen';
import DailyTasksScreen from '../../screens/Task/DailyTasksScreen';
import HRScreen from '../../screens/HR/HRScreen';
import SettingScreen from '../../screens/Account/Settings/SettingScreen';
import WeeklyTaskScreen from '../../screens/WeeklyTask/WeeklyTaskScreen';




const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}:any) => {

  // const { user } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white' },
        tabBarActiveTintColor: colors.brand_primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { marginBottom: 5 },
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      // initialParams={{ user }}
        options={{
          // tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={23} />
          ),
        }}
      />

      <Tab.Screen name="Task" component={WeeklyTaskScreen} 
      // initialParams={{ user }}
        options={{
          // tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-search" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen name="HR" component={HRScreen}
        options={{
          // tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={23} />
          ),
        }}
      />

      <Tab.Screen name="Account" component={SettingScreen}
        options={{
          // tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={23} />
          ),
        }}
      />



    </Tab.Navigator>

  )
}

export default BottomTabNavigation