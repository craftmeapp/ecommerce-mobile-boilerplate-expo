import React, { Component, Fragment } from 'react';
import { Button, List } from 'native-base';
import styled from 'styled-components';
import CartItem from '../../../components/CartItem';

const TextStyled = styled.Text``;

const SummaryStyled = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ContentStyled = styled.View`
  padding-bottom: 100;
`;

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

  renderSummary() {
    const { total } = this.props;

    return (
      <SummaryStyled>
        <Button full success onPress={this.handleConfirmRegion}>
          <TextStyled>
            Оформить на сумму {total} руб.
          </TextStyled>
        </Button>
      </SummaryStyled>
    );
  }

  render() {
    const items = this.renderItems(),
      summary = this.renderSummary();

    return (
      <Fragment>
        {items}
        {summary}
      </Fragment>
    );
  }
}
