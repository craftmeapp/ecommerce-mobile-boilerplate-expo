import React, { Component } from 'react';
import { Container, Header, Title, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { Catalog, Cart, About } from './src/screens';

const RootStack = createBottomTabNavigator(
  {
    Catalog: {
      screen: Catalog,
    },
    About: {
      screen: About,
    },
    Cart: {
      screen: Cart,
    },
  },
  {
    initialRouteName: 'Catalog',
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button vertical active={props.navigation.state.index === 0} onPress={() => props.navigation.navigate('Catalog')}>
              <Icon name="menu" />
              <Text>Меню</Text>
            </Button>
            <Button vertical active={props.navigation.state.index === 1} onPress={() => props.navigation.navigate('About')}>
              <Icon name="home" />
              <Text>О нас</Text>
            </Button>
            <Button vertical active={props.navigation.state.index === 2} onPress={() => props.navigation.navigate('Cart')}>
              <Icon active name="basket"/>
              <Text>Корзина</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
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