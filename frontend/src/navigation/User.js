import React from 'react';
// import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen, OnboardingScreens, SignUpScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const UserScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Landing');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreens}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Onboarding');
          },
        })}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('SignUp');
          },
        })}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

UserScreens.propTypes = {};

export default UserScreens;
