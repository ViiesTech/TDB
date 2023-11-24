import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Routes = () => {
  const Stack = createStackNavigator();

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
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
