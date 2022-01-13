import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from 'navigation/RootNaviagtion';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@redux/store';

const App = () => {

  return (
    // <Provider store={store}>
    //   <SafeAreaProvider>
    <RootNavigation />
    //   </SafeAreaProvider>
    // </Provider>
  );
};

const WrapperApp = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  )
}

export default WrapperApp;
