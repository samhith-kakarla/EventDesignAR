import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const DashboardScreens = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Dashboard');
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

DashboardScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DashboardScreens;
