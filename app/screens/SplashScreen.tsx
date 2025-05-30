import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HealthIcon from '../assets/svg/health_icon.svg';

type RootStackParamList = {
  Login: undefined;
};

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function SplashScreen({ navigation }: SplashScreenProps): JSX.Element {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000); // mock auth check
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <HealthIcon width={120} height={120} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3', // Material Design Blue
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 16,
  },
});
