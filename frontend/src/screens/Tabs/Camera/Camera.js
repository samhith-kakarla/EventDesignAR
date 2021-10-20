import React from 'react';
import PropTypes from 'prop-types';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  mainView: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.yellow,
    fontWeight: 'bold',
    fontSize: 28,
  },
  button: {
    marginBottom: 5,
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blue2,
    borderWidth: 1,
    borderRadius: 30,
    width: 200,
    paddingLeft: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 15,
    color: colors.white,
  },
});

const CameraScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LIBRARY ORGANIZER</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('View Playlist')}
        >
          <Text style={styles.buttonText}>View Playlist!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Select Genres')}
        >
          <Text style={styles.buttonText}>Organize My Library!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

CameraScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CameraScreen;
