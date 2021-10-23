import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import UserScreens from './User';
import HomeTabs from './Tabs';
import { getUserInfo, createNewUser } from '../api/user';
import {
  backendFetched as reduxBackendFetched,
  backendError as reduxBackendError,
} from '../redux/actions/userActions';

LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

const Main = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.user !== null);
  // const userId = useSelector((state) => state.auth.userId);
  // const backendFetched = useSelector((state) => state.user.backendFetched);

  // const setBackendFetched = () => dispatch(reduxBackendFetched());
  // const setBackendError = () => dispatch(reduxBackendError());

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="Search"
              listeners={({ route }) => ({
                focus: (e) => {
                  // recordScreen('Search');
                },
              })}
            >
              {(navigation) => <HomeTabs navigation={navigation} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Landing"
              component={UserScreens}
              listeners={({ route }) => ({
                focus: (e) => {
                  // recordScreen('Landing');
                },
              })}
              options={{
                headerShown: false,
                animationTypeForReplace: 'pop',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Main.propTypes = {};

export default Main;
