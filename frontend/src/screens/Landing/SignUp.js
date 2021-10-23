import React from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView, View, Text } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpScreen;
