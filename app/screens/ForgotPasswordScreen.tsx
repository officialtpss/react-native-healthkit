import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../assets/svg/back_arrow.svg';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const navigation = useNavigation()

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Please enter your email');
      return;
    }

    // Add password reset logic here (e.g., Firebase, custom API)
    console.log('Reset password email sent to:', email);
    Alert.alert('If this email is registered, a reset link has been sent.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.backButton}>
                <ArrowLeft />
              </View>

            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subTitle}>
                Enter your registered email to receive password reset instructions.
              </Text>
            </View>

            <View style={styles.backButton} />

          </View>


          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
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
    flex: 1,
    padding: 24
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#231F20',
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 24,
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
  button: {
    backgroundColor: '#231F20',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
});
