import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  KeyboardAvoidingView, Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tick_Icon from '../assets/svg/tick.svg';
import Untick_Icon from '../assets/svg/untick.svg';
import ArrowLeft from '../assets/svg/back_arrow.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export default function RegisterScreen( ): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigation=useNavigation()

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    if (!acceptedTerms) {
      Alert.alert('Please accept Terms and Privacy Policy');
      return;
    }

    console.log('Registering:', { name, email, password });
    register(name, email, password)
    // Add real registration logic
  };

  const register = async (name, email, password) => {
    const existing = await AsyncStorage.getItem('users');
    const users = existing ? JSON.parse(existing) : [];

    const alreadyExists = users.find(u => u.email === email);
    if (alreadyExists) throw new Error('Email already registered');

    users.push({ name, email, password });
    await AsyncStorage.setItem('users', JSON.stringify(users));
    navigation.goBack()

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={() => navigation.goBack()}>
              <View style={styles.backButton}>
                <ArrowLeft />
              </View>

            </TouchableOpacity>
            <View style={{flex:1}}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subTitle}>Register to get started</Text>

            </View>

            <View style={styles.backButton}/>

          </View>




          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="John Doe"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              placeholder="••••••••"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
          >
            {acceptedTerms ? (
              <Tick_Icon width={20} height={20} />
            ) : (
              <Untick_Icon width={20} height={20} />
            )}
            <Text style={styles.checkboxText}>
              I agree to the{' '}
              <Text style={styles.link}>Terms & Conditions</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    color: '#231F20',
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginLeft: 12,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#444',
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#007BFF',
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#231F20',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    height:45,
    width:45,
    alignItems:'center',
    justifyContent:'center',
    padding: 5
  },
});
