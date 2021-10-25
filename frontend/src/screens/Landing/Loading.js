import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

import * as colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Progress.CircleSnail
        size={85}
        indeterminate={true}
        thickness={5}
        color={[colors.red3, colors.red2, colors.red1]}
        duration={750}
      />
    </SafeAreaView>
  );
};

LoadingScreen.propTypes = {};

export default LoadingScreen;
