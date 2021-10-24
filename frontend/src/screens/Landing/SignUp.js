import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  setUser as reduxSetUser,
  unsetUser as reduxUnsetUser,
} from '../../redux/actions/userActions';
import { signup } from '../../firebase/auth';
// import * as colors from '../../theme/colors';
import styles from './styles';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const signupUser = (user) => dispatch(reduxSetUser(user));
  const signupUserFailed = () => dispatch(reduxUnsetUser());

  const handleSignUp = async () => {
    const error = await signup(
      name,
      email,
      password,
      async (userId, userEmail) => {
        signupUser({ userId: userId, email: userEmail });
      },
    );

    setError(error);
    if (error !== '') {
      signupUserFailed();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <TextInput
          style={styles.inputBox}
          value={name}
          onChangeText={(text) => {
            setError();
            setName(text);
          }}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={(text) => {
            setError();
            setEmail(text);
          }}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{error !== '' ? error : ''}</Text>
      </View>
    </SafeAreaView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpScreen;
