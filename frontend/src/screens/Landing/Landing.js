import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

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
import { login } from '../../firebase/auth';
// import * as colors from '../../theme/colors';
import styles from './styles';

const LandingScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const loginUser = (user) => dispatch(reduxSetUser(user));
  const loginUserFailed = () => dispatch(reduxUnsetUser());

  const handleLogin = async () => {
    const error = await login(email, password, async (userCred) => {
      const userId = userCred.user.uid;
      const email = userCred.user.email;
      const fullName = userCred.user.displayName;
      loginUser({ userId: userId, email: email, fullName: fullName });
    });

    setError(error);
    if (error !== '') {
      loginUserFailed();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.buttonView}>
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
                onChangeText={(value) => {
                  setError();
                  setEmail(value);
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
                onChangeText={(value) => {
                  setError();
                  setPassword(value);
                }}
                placeholder="********"
                placeholderTextColor="#7B8794"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.navigationView}>
              <Text style={styles.navigationLabelText}>
                Don&#39;t have an account yet?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.navigationText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

LandingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LandingScreen;
