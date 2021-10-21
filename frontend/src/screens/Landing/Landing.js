import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { setAuthStatus as reduxSetAuthStatus } from '../../redux/actions/authActions';
import { setIsAuthenticated as reduxSetIsAuthenticated } from '../../redux/actions/userActions';
// import * as colors from '../../theme/colors';
import styles from './styles';

const LandingScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  const dispatch = useDispatch();
  const setAuthStatus = (userId, accessToken, refreshToken, expiresIn) =>
    dispatch(reduxSetAuthStatus(userId, accessToken, refreshToken, expiresIn));
  const setIsAuthenticated = () => dispatch(reduxSetIsAuthenticated());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LANDING PAGE</Text>
        <View style={styles.buttonView}>
          <Button disabled={!request} title="Login" style={styles.mainButton} />
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Onboarding')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

LandingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LandingScreen;
