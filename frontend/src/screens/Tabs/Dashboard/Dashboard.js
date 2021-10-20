import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, SafeAreaView, Text } from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DASHBOARD</Text>
    </SafeAreaView>
  );
};

DashboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DashboardScreen;
