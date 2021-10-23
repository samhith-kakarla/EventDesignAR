import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

// import * as colors from '../../theme/colors';
import styles from './styles';

const LandingScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LANDING PAGE</Text>
        <View style={styles.buttonView}>
          <Button title="Login" style={styles.mainButton} />
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
