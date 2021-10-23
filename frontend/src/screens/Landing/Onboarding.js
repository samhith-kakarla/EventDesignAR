import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Onboarding from 'react-native-onboarding-swiper';

import * as colors from '../../theme/colors';
import styles from './styles';

const OnboardingScreens = ({ navigation }) => {
  const pages = [
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={{
            width: 200,
            height: 250,
          }}
          // source={require('../../assets/onboarding2.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Automated music library management
        </Text>
      ),
      subtitle: (
        <>
          <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
            Mingle and switch between chats as you would when your group is all
            together.
          </Text>
          <Button
            onPress={() => navigation.navigate('Landing')}
            iconRight
            icon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                color={colors.white}
                style={{ marginLeft: 10 }}
              />
            }
            title="Get Started"
            buttonStyle={styles.onboardingButton}
            style={{ marginTop: 50, color: 'white', alignSelf: 'flex-start' }}
          />
        </>
      ),
    },
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={styles.image}
          // source={require('../../assets/onboarding1.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Up-to-date playlists
        </Text>
      ),
      subtitle: (
        <>
          <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
            {
              "Fine tune your notifications so that you're only notified about what matters to you."
            }
          </Text>
          <Button
            onPress={() => navigation.navigate('Landing')}
            iconRight
            icon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                color={colors.white}
                style={{ marginLeft: 10 }}
              />
            }
            title="Get Started"
            buttonStyle={styles.onboardingButton}
            style={{ marginTop: 50, color: 'white', alignSelf: 'flex-start' }}
          />
        </>
      ),
    },
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={{
            width: 305,
            height: 260,
            marginTop: 50,
          }}
          // source={require('../../assets/onboarding3.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Full music customization
        </Text>
      ),
      subtitle: (
        <>
          <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
            Fresh conversation starters to help keep a conversation going, or to
            kickstart a completely new one.
          </Text>
          <Button
            onPress={() => navigation.navigate('Landing')}
            iconRight
            icon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                color={colors.white}
                style={{ marginLeft: 10 }}
              />
            }
            title="Get Started"
            buttonStyle={styles.onboardingButton}
            style={{ marginTop: 50, color: 'white', alignSelf: 'flex-start' }}
          />
        </>
      ),
    },
  ];
  return (
    <Onboarding
      bottomBarHighlight={false}
      bottomBarHeight={60}
      titleStyles={{ alignSelf: 'flex-start' }}
      showNext={false}
      showSkip={false}
      showDone={false}
      transitionAnimationDuration={0}
      pages={pages}
    ></Onboarding>
  );
};

OnboardingScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default OnboardingScreens;
