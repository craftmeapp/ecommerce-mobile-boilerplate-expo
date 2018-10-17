import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, FooterTab, Button, Icon, Text, Spinner } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import { Catalog, Cart, About } from '../../';
import { LOGIN } from '../../../constants';

const PreloadingContainerStyled = styled.View`

`;

const AppStack = createBottomTabNavigator(
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

export default class Preloading extends Component {
  componentWillMount() {
    const { fetchCatalog, fetchProducts } = this.props;

    fetchCatalog({ login: LOGIN });
    fetchProducts({ login: LOGIN });
  }

  renderApp() {
    const { catalog, products } = this.props;

    if (catalog.isAvailable && products.isAvailable) {
      return (
        <AppStack />
      );
    }

    return (
      <Spinner />
    );
  }

  render() {
    const app = this.renderApp();

    return (
      <PreloadingContainerStyled>
        {app}
      </PreloadingContainerStyled>
    );
  }
}