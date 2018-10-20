
import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import { Catalog, Cart, About } from '../';

export default createBottomTabNavigator(
  {
    Catalog: {
      screen: Catalog,
    },
    Cart: {
      screen: Cart,
    },
  },
  {
    initialRouteName: 'Catalog',
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button vertical active={props.navigation.state.index === 0} onPress={() => props.navigation.navigate('Catalog')}>
              <Icon name="menu" />
              <Text>Меню</Text>
            </Button>
            <Button vertical active={props.navigation.state.index === 1} onPress={() => props.navigation.navigate('Cart')}>
              <Icon active name="basket"/>
              <Text>Корзина</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);
