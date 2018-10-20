import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'native-base';
import { View, Text } from 'react-native';
import { getProductImageURL } from '../../../utils/misc';
import { LOGIN } from '../../../constants';

const TextStyled = styled.Text``;

const ImageStyled = styled.Image`
  width: 100%;
  height: 100%;
`;

const ProductStyled = styled.View`
  flex: 1;
`;

const ProductImageContainerStyled = styled.View`
  flex: 2;
`;

const ProductDescriptionStyled = styled.View`
  flex: 1;
`;

const ProoductControlContainerStyled = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ProductPriceContainerStyled = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ProductAmountContainerStyled = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ProductAmountTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.currentProductId = props.navigation.getParam('product');

    this.state = {
      amount: this.getAmount(),
    };
  }

  getProduct() {
    const { products } = this.props;

    if (!products)
      return null;

    product = products.items.find(item => parseInt(item.id) === parseInt(this.currentProductId));

    if (!product)
      return null;

    return product;
  }

  getPrice() {
    const { prices, regions } = this.props;

    return prices.items.find(price => (price.dish === this.currentProductId && price.region === regions.currentRegion));
  }

  getAmount() {
    const { cart } = this.props;

    const product = cart.items.find(item => item.id === this.currentProductId);

    if (product)
      return product.amount;

    return 0;
  }

  handleMinusProductToCart = () => {
    const { amount } = this.state;

    if (amount > 0)
      this.setState({ amount: amount - 1 });
  }

  handlePlusProductToCart = () => {
    const { amount } = this.state;

    this.setState({ amount: amount + 1 });
  }

  handleAddProductToCart = () => {
    const { addProductToCart, removeProductFromCart, navigation } = this.props;
    const { amount } = this.state;

    const id = this.currentProductId;

    if (amount)
      addProductToCart({ id, amount });
    else
      removeProductFromCart({ id });

    navigation.goBack();
  }

  render() {
    const { amount } = this.state,
      { cart } = this.props;

    const product = this.getProduct(),
      price = this.getPrice();

    console.log(cart);
    if (!product)
      return null;

    const { title, description } = product;

    return (
      <ProductStyled>
        <ProductImageContainerStyled>
          <ImageStyled source={{uri: getProductImageURL({ id: product.id, size: 1 })}} resizeMode="contain" />
        </ProductImageContainerStyled>
        <ProductDescriptionStyled>
          <TextStyled>
            {description}
          </TextStyled>
        </ProductDescriptionStyled>
        <ProoductControlContainerStyled>
          <ProductPriceContainerStyled>
            <Text>
              сумма:
            </Text>
            <Text>
              {price.cost}
            </Text>
          </ProductPriceContainerStyled>
          <ProductAmountContainerStyled>
            <Button transparent primary onPress={this.handleMinusProductToCart}>
              <Icon fontSize="40" type="Feather" name="minus-square" />
            </Button>
            <ProductAmountTextContainer>
              <View>
                <Text>{amount}</Text>
              </View>
              <View>
                <Text>
                  шт.
                </Text>
              </View>
            </ProductAmountTextContainer>
            <Button transparent primary onPress={this.handlePlusProductToCart}>
              <Icon fontSize="30" type="Feather" name="plus-square" />
            </Button>
            <Button onPress={this.handleAddProductToCart}>
              <Text>
                Добавить
              </Text>
            </Button>
          </ProductAmountContainerStyled>
        </ProoductControlContainerStyled>
      </ProductStyled>
    );
  }
}