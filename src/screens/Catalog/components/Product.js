import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
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
`;

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.currentProductId = props.navigation.getParam('product');
  }

  getProduct() {
    const { products } = this.props;

    if (!products)
      return null;

    const product = products.items.find(item => parseInt(item.id) === parseInt(this.currentProductId));

    if (!product)
      return null;

    return product;
  }

  render() {
    const product = this.getProduct();

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

        </ProoductControlContainerStyled>
      </ProductStyled>
    );
  }
}