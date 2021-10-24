import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.buttonView}>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={(value) => {
              setError();
              setEmail(value);
            }}
            placeholder="Email"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={(value) => {
              setError();
              setPassword(value);
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            title="Login"
            style={styles.mainButton}
            onPress={handleLogin}
          />
          <Text>Don&#39;t have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

LandingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LandingScreen;
