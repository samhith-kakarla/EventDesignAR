import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.buttonView}>
            <Text style={styles.labelText}>NAME</Text>
            <View style={styles.inputBox}>
              <MaterialIcons
                name="person-outline"
                color="#7B8794"
                size={20}
                style={{ padding: 2 }}
              />
              <TextInput
                style={styles.inputBoxText}
                value={name}
                onChangeText={(text) => {
                  setError();
                  setName(text);
                }}
                placeholder="Full Name"
                placeholderTextColor="#7B8794"
              />
            </View>
            <Text style={styles.labelText}>EMAIL</Text>
            <View style={styles.inputBox}>
              <MaterialIcons
                name="mail-outline"
                color="#7B8794"
                size={20}
                style={{ padding: 2 }}
              />
              <TextInput
                style={styles.inputBoxText}
                value={email}
                onChangeText={(text) => {
                  setError();
                  setEmail(text);
                }}
                placeholder="name@email.com"
                placeholderTextColor="#7B8794"
                autoCapitalize="none"
              />
            </View>
            <Text style={styles.labelText}>PASSWORD</Text>
            <View style={styles.inputBox}>
              <MaterialIcons
                name="lock-outline"
                color="#7B8794"
                size={20}
                style={{ padding: 2 }}
              />
              <TextInput
                style={styles.inputBoxText}
                value={password}
                onChangeText={setPassword}
                placeholder="********"
                placeholderTextColor="#7B8794"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.navigationView}>
              <Text style={styles.navigationLabelText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                <Text style={styles.navigationText}>Login</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText}>{error !== '' ? error : ''}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpScreen;
