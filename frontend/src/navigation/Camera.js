import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { CameraScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const CameraScreens = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Camera"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Camera');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

CameraScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CameraScreens;
