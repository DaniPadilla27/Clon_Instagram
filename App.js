import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

export default function App() {
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Login details:', loginDetails);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.logo}
        source={{ uri: 'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Instagram.png' }}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number, username, or email"
        onChangeText={(text) => setLoginDetails({ ...loginDetails, username: text })}
        value={loginDetails.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setLoginDetails({ ...loginDetails, password: text })}
        value={loginDetails.password}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.facebookLogin}>
        <Text style={styles.facebookLoginText}>Continue como Carlos Daniel Padilla</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.signupText}>Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: '#00376b',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#0095f6',
    borderRadius: 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
  },
  or: {
    color: '#8e8e8e',
    marginVertical: 10,
  },
  facebookLogin: {
    marginBottom: 10,
  },
  facebookLoginText: {
    color: '#385185',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#0095f6',
    fontWeight: 'bold',
  },
});
