import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { useIsFocused } from '@react-navigation/native';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import DashboardScreens from './Dashboard';
import CameraScreens from './Camera';

import * as colors from '../theme/colors';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const HomeTabs = ({ navigation }) => {
  // const isFocused = useIsFocused();
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  const listener = ({ route }) => {
    return {
      tabPress: (e) => {
        recordScreen(route.name);
      },
    };
  };

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs">
        {({ navigation }) => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // eslint-disable-next-line react/prop-types
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                const useCommunity = false;
                switch (route.name) {
                  case 'Dashboard': {
                    iconName = 'home';
                    break;
                  }
                  case 'Profile': {
                    iconName = 'person';
                    break;
                  }
                  case 'My Library': {
                    iconName = 'library-music';
                    break;
                  }
                  default: {
                    iconName = 'error';
                    break;
                  }
                }

                if (useCommunity) {
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                } else {
                  return (
                    <MaterialIcons name={iconName} size={size} color={color} />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: colors.orange2,
              inactiveTintColor: colors.white,
              labelStyle: fontLoaded ? fontStyles.normal : '',
              labelPosition: 'below-icon',
              showLabel: false,
              style: {
                backgroundColor: '#333333',
                borderTopWidth: 0,
              },
            }}
          >
            <Tab.Screen name="Dashboard" listeners={listener}>
              {({ navigation }) => <DashboardScreens navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Camera" listeners={listener}>
              {({ navigation }) => <CameraScreens navigation={navigation} />}
            </Tab.Screen>
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

HomeTabs.propTypes = {
  // from parent
  navigation: PropTypes.object.isRequired,
};

export default HomeTabs;
