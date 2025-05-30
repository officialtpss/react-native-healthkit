import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';
import LegalTextScreen from '../screens/LegalTextScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen
          name="Terms"
          component={LegalTextScreen}
          initialParams={{ type: 'terms' }}
          options={{ title: 'Terms & Conditions' }}
        />
        <Stack.Screen
          name="Privacy"
          component={LegalTextScreen}
          initialParams={{ type: 'privacy' }}
          options={{ title: 'Privacy Policy' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
