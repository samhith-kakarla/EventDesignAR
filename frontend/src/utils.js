import { Dimensions } from 'react-native';

// import { Analytics as GoogleAnalytics, Event, PageHit } from 'expo-analytics';
// import * as Analytics from 'expo-firebase-analytics';

// import { store } from './redux/store';
// import { GOOGLE_ANALYTICS_ID } from './config';

export const log = (...args) => {
  if (__DEV__) {
    console.log(...args);
  }
};

export const getHeight = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // accounts for screen being rotated when measurement taken
  return Math.max(windowWidth, windowHeight);
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function recordEvent(category, action) {
  return 0;

  /*
  const state = store.getState();
  const analytics = new GoogleAnalytics(GOOGLE_ANALYTICS_ID, {
    uid: state.user.userId,
  });

  Analytics.logEvent(category + '_' + action);
  analytics.event(new Event(category, action));
  */
}

export function recordScreen(screen) {
  return 0;

  /*
  const state = store.getState();
  const analytics = new GoogleAnalytics(GOOGLE_ANALYTICS_ID, {
    uid: state.user.userId,
  });

  analytics.hit(new PageHit(screen));
  Analytics.setCurrentScreen(screen);
  */
}
