import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner } from 'native-base';
import { LOGIN } from '../../../constants';

const PreloadingContainerStyled = styled.View`

`;

export default class Preloading extends Component {
  componentWillMount() {
    const { fetchCatalog, fetchProducts } = this.props;

    fetchCatalog({ login: LOGIN });
    fetchProducts({ login: LOGIN });
  }

  renderRedirect() {
    const { catalog, products } = this.props;

    if (catalog.isAvailable && products.isAvailable)
      this.props.navigation.navigate('Main');

    return null;
  }

  render() {
    const redirect = this.renderRedirect();

    return (
      <PreloadingContainerStyled>
        <Spinner />
        {redirect}
      </PreloadingContainerStyled>
    );
  }
}