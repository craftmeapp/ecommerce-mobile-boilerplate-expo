import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
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
      console.log(props);
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

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Доставка Суши</Title>
        </Header>
        <RootStack />
      </Container>
    );
  }
}