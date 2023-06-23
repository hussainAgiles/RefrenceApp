import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPassword from '../Screens/ForgotPassword';
import OtpScreen from '../Screens/OtpScreen'
import Home from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNaVigation = ()=>{
  return(
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
  )
}

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword}/>
      <Stack.Screen name="otp" component={OtpScreen}/>
      <Stack.Screen name='Dashboard' component={DrawerNaVigation}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
