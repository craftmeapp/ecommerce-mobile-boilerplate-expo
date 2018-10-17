import React, { Component } from 'react';
import { Container } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { Preloading } from './src/screens';

const RootStack = createStackNavigator(
  {
    Preloading: {
      screen: Preloading,
    },
  },
  {
    initialRouteName: 'Preloading',
    navigationOptions: {
      headerMode: 'none',
      header: null,
    },
  }
);

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <RootStack />
        </Container>
      </Provider>
    );
  }
}