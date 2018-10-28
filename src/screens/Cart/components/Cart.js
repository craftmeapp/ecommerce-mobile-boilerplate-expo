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
        <CartItem
          key={item.id}
          index={item.id}
          title={product.title}
          amount={item.amount}
          onPress={this.handlePress}
          onRemove={this.handleRemove}
        />
      );
    });

    return (
      <List>
        {items}
      </List>
    );
  }

  handlePress = ({ index }) => {
    const { navigation } = this.props;
    navigation.navigate('ProductPreview', { product: index });
  }

  handleRemove = ({ index }) => {
    const { removeProductFromCart } = this.props;
    removeProductFromCart({ id: index });
  }

  render() {
    const items = this.renderItems();

    return (
      <Fragment>
        <Content>
          {items}
        </Content>
      </Fragment>
    );
  }
}
