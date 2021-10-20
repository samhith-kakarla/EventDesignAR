import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import * as WebBrowser from 'expo-web-browser';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { getSpotifyUserId } from '../../api/spotify';

import { setAuthStatus as reduxSetAuthStatus } from '../../redux/actions/authActions';
import {
  setIsAuthenticated as reduxSetIsAuthenticated,
  setSpotifyProfileURL as reduxSetSpotifyProfileURL,
} from '../../redux/actions/userActions';
// import * as colors from '../../theme/colors';
import styles from './styles';

WebBrowser.maybeCompleteAuthSession();

const LandingScreen = ({ navigation }) => {
  const spotifyEndpoints = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '15af30911e4c41dbb45c25106d7653f4',
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: false,
      redirectUri: 'exp://127.0.0.1:19000/',
    },
    spotifyEndpoints,
  );

  // eslint-disable-next-line no-unused-vars
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  const dispatch = useDispatch();
  const setAuthStatus = (userId, accessToken, refreshToken, expiresIn) =>
    dispatch(reduxSetAuthStatus(userId, accessToken, refreshToken, expiresIn));
  const setIsAuthenticated = () => dispatch(reduxSetIsAuthenticated());
  const setSpotifyProfileURL = (url) =>
    dispatch(reduxSetSpotifyProfileURL(url));

  useEffect(() => {
    (async () => {
      if (response?.type === 'success') {
        console.log(response.params);
        // eslint-disable-next-line camelcase
        const { access_token, expires_in } = response.params;
        console.log(access_token);
        const spotifyUserId = await getSpotifyUserId(access_token);
        console.log(spotifyUserId);
        setAuthStatus(spotifyUserId, access_token, '', expires_in);
        setSpotifyProfileURL(`https://open.spotify.com/user/${spotifyUserId}`);
        setIsAuthenticated();
      }
    })();
  }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LANDING PAGE</Text>
        <View style={styles.buttonView}>
          <Button
            disabled={!request}
            title="Login"
            onPress={() => {
              promptAsync();
            }}
            style={styles.mainButton}
          />
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Onboarding')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

LandingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LandingScreen;
