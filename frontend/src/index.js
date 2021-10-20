import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { View, ActivityIndicator } from 'react-native';

// import { Host } from 'react-native-portalize';
// import * as Sentry from 'sentry-expo';

import { store, persistor } from './redux/store';
import { Main } from './navigation';

/*
// TODO: Set up Sentry Tracking
Sentry.init({
  dsn:
    'https://addeb25c35284f81b615e4fff578c10a@o498223.ingest.sentry.io/5575514',
  enableAutoSessionTracking: true,
  tracesSampleRate: __DEV__ ? 1.0 : 0.1,
  enableInExpoDevelopment: true,
  debug: __DEV__,
});
*/

const App = () => {
  const renderLoading = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={renderLoading()} persistor={persistor}>
        {/* <Host>*/}
        <Main />
        {/* </Host>*/}
      </PersistGate>
    </Provider>
  );
};

export default App;
