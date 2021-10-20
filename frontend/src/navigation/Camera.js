import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { OrganizerScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const CameraScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Camera">
      <Stack.Screen
        name="Camera"
        component={OrganizerScreen}
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
