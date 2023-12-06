import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/authScreens/Signup";
import Login from "../screens/authScreens/Login";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Signup"
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
