import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  SafeAreaView,
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Linking from 'expo-linking';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Avatar } from 'react-native-elements';

import styles from './styles';
import * as colors from '../../../theme/colors';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [spotifyURL, setSpotifyURL] = useState('');
  const [nameError, setNameError] = useState(false);

  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting3, setSetting3] = useState(false);
  const [settingsError, setSettingsError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const unsetAuthStatus = () => dispatch(reduxUnsetAuthStatus());
  const unsetUser = () => dispatch(reduxUnsetUser());

  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.auth.userId);
  const spotifyProfileURL = useSelector(
    (state) => state.user.spotifyProfileURL,
  );

  const goToUserSpotify = () => Linking.openURL(spotifyProfileURL);

  const updateName = async () => {
    const updatedUser = { ...user, username: name };
    const error = await updateUser(updatedUser);
    console.log(error);
    if (error !== '') {
      setNameError(true);
    }
  };

  const updateUserSettings = async (setting, name) => {
    const updatedUser = { ...user };
    const error = await updateUser(updatedUser);
    console.log(error);
    if (error !== '') {
      setSettingsError(true);
    }
  };

  const logout = () => {
    unsetAuthStatus();
    unsetUser();
  };

  useEffect(() => {
    setName(userId);
    setSpotifyURL(spotifyProfileURL);
  }, [userId, spotifyProfileURL]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        {/* <Text>{name}</Text> */}
        <View>
          <Text style={styles.headerText}>Hi, {name}</Text>
          <TouchableOpacity
            style={styles.spotifyButton}
            onPress={goToUserSpotify}
          >
            {/* <Image
              style={styles.spotifyLogo}
              source={require('../../../assets/spotify.png')}
            /> */}
            <Text style={styles.spotifyButtonText}>My Spotify Profile</Text>
          </TouchableOpacity>
          <Text style={styles.settingsText}>Settings</Text>
          <View style={styles.settingsView}>
            <View>
              <Text style={styles.settingText}>Setting 1</Text>
              <Text style={[styles.settingText, { marginTop: 20 }]}>
                Setting 2
              </Text>
              <Text style={[styles.settingText, { marginTop: 20 }]}>
                Setting 3
              </Text>
            </View>
            <View>
              <Switch
                trackColor={{
                  false: colors.white,
                  true: colors.blue2,
                }}
                thumbColor={'white'}
                ios_backgroundColor={colors.white}
                onValueChange={() => setSetting1(!setting1)}
                value={setting1}
              />
              <Switch
                trackColor={{
                  false: colors.white,
                  true: colors.blue2,
                }}
                thumbColor={'white'}
                ios_backgroundColor={colors.white}
                onValueChange={() => setSetting2(!setting2)}
                value={setting2}
                style={{ marginTop: 15 }}
              />
              <Switch
                trackColor={{
                  false: colors.white,
                  true: colors.blue2,
                }}
                thumbColor={'white'}
                ios_backgroundColor={colors.white}
                onValueChange={() => setSetting3(!setting3)}
                value={setting3}
                style={{ marginTop: 15 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutButtonText}>LOGOUT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.infoButtonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.infoButtonText}>Terms of Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
