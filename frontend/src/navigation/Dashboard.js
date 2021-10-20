import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen, UpdatePlaylistScreen } from '../screens';
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
      <Stack.Screen
        name="Update Playlist"
        component={UpdatePlaylistScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Update Playlist');
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
