import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

// Layar Login LMS untuk React Native / Expo
// Dioptimalkan untuk iPhone 17 Pro Max (440 x 956 pt)
export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Perhatian', 'Mohon isi ID dan Password Anda');
      return;
    }
    Alert.alert('Berhasil', `Selamat datang, ${username}!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}
      >
        <View style={styles.innerContainer}>
          {/* Header & Logo Section */}
          <View style={styles.brandSection}>
            <View style={styles.iconContainer}>
              <Text style={styles.capEmoji}>🎓</Text>
            </View>
            <Text style={styles.brandTitle}>LMS</Text>
            <Text style={styles.brandSubtitle}>
              Your Learning Journey{'\n'}Starts Here
            </Text>
          </View>

          {/* Form Inputs */}
          <View style={styles.formSection}>
            {/* Input ID / NIP / NIM */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputIcon}>👤</Text>
              <TextInput
                style={styles.input}
                placeholder="ID / NIP / NIM"
                placeholderTextColor="#92A5B8"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>

            {/* Input Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#92A5B8"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeBtn}
              >
                <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>

            {/* Options Row */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.checkboxRow}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Ingat saya</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Alert.alert('Lupa Password', 'Silakan hubungi admin kampus')}>
                <Text style={styles.forgotLink}>Lupa password?</Text>
              </TouchableOpacity>
            </View>

            {/* Tombol Masuk */}
            <TouchableOpacity
              style={styles.submitBtn}
              activeOpacity={0.88}
              onPress={handleLogin}
            >
              <Text style={styles.submitBtnText}>Masuk</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footerSection}>
              <Text style={styles.footerText}>Belum punya akun?</Text>
              <TouchableOpacity onPress={() => Alert.alert('Administrator', 'admin@lms-campus.ac.id')}>
                <Text style={styles.footerLink}>Hubungi Administrator</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Home Indicator Mockup */}
        <View style={styles.homeIndicatorWrapper}>
          <View style={styles.homeIndicator} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF1FD',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 38,
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 90,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  capEmoji: {
    fontSize: 54,
  },
  brandTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#1A92F1',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  brandSubtitle: {
    fontSize: 13.5,
    fontWeight: '500',
    color: '#7E93A6',
    textAlign: 'center',
    lineHeight: 20,
  },
  formSection: {
    gap: 14,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderWidth: 1.2,
    borderColor: '#DFEDF7',
    borderRadius: 14,
    height: 52,
    paddingHorizontal: 16,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 52,
    fontSize: 14.5,
    color: '#1E293B',
    fontWeight: '500',
  },
  eyeBtn: {
    padding: 6,
  },
  eyeIcon: {
    fontSize: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: '#CBDDEB',
    backgroundColor: '#DFEDF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#1A92F1',
    borderColor: '#1A92F1',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#7E93A6',
    fontWeight: '500',
  },
  forgotLink: {
    fontSize: 13,
    color: '#2497F2',
    fontWeight: '500',
  },
  submitBtn: {
    backgroundColor: '#1A92F1',
    height: 52,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    shadowColor: '#1588E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.38,
    shadowRadius: 20,
    elevation: 8,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 24,
    gap: 3,
  },
  footerText: {
    fontSize: 12.5,
    color: '#8295A7',
    fontWeight: '500',
  },
  footerLink: {
    fontSize: 13,
    color: '#1A92F1',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  homeIndicatorWrapper: {
    alignItems: 'center',
    marginBottom: 8,
  },
  homeIndicator: {
    width: 140,
    height: 4.5,
    backgroundColor: '#0F172A',
    borderRadius: 10,
  },
});
