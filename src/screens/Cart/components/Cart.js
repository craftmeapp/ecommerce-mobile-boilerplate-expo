import React, { Component, Fragment } from 'react';
import { Content, Header, List } from 'native-base';
import styled from 'styled-components';
import CartItem from '../../../components/CartItem';

const TextStyled = styled.Text``;

export default class Cart extends Component {
  renderItems() {
    const { cart, products } = this.props;

    const items = cart.items.map(item => {
      const product = products.items.find(findProduct => findProduct.id === item.id);

      return (
        <CartItem key={item.id} title={product.title} amount={item.amount} onPress={() => {}} />
      );
    });

    return (
      <List>
        {items}
      </List>
    );
  }

  render() {
    const items = this.renderItems();

    return (
      <Fragment>
        <Header />
        <Content>
          {items}
        </Content>
      </Fragment>
    );
  }
}
