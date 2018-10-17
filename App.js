import React, { Component } from 'react';
import { Container } from 'native-base';
import { createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { Preloading, Main } from './src/screens';

const RootStack = createSwitchNavigator(
  {
    Preloading: {
      screen: Preloading,
    },
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Preloading',
  }
);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Container>
      <RootStack />
    </Container>
  </Provider>
);
export default App;
