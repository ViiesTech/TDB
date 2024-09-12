import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

import { useSelector } from 'react-redux';

const Routes = () => {
  const Stack = createStackNavigator();
  const {token} = useSelector(state => state.authData);

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthStack">
        {
          token ? (
            <Stack.Screen name="MainStack" component={MainStack} />
          ) : (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
