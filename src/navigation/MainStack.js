import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import StartingSlider from '../screens/mainScreens/StartingSlider';
import Home from '../screens/mainScreens/Home';
import Explore from '../screens/mainScreens/Explore';
import Profile from '../screens/mainScreens/Profile';
import LinearGradient from 'react-native-linear-gradient';

import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={[colors.primary, '#000000']}
            style={{
              height: '100%',
              bordertopleftradius: 15,
              bordertoprightradius: 15,
            }}
          />
        ),
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: {color: 'white', fontSize: hp('1.7%')},
          tabBarStyle: {height: hp('8%'), backgroundColor: colors.bg},
          tabBarIcon: ({focused}) => {
            return (
              <Foundation
                name="home"
                size={35}
                color={focused ? colors.primary : 'white'}
                style={{marginBottom: -10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarLabelStyle: {color: 'white', fontSize: hp('1.6%')},
          tabBarItemStyle: {borderTopWidth: 0},
          tabBarStyle: {
            height: hp('8%'),
            // backgroundColor: colors.bg,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="compass"
                size={33}
                color={focused ? colors.primary : 'white'}
                style={{marginBottom: -10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {color: 'white', fontSize: hp('1.7%')},
          tabBarStyle: {height: hp('8%'), backgroundColor: colors.bg},
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="person"
                size={30}
                color={focused ? colors.primary : 'white'}
                style={{marginBottom: -10}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartingSlider" component={StartingSlider} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
