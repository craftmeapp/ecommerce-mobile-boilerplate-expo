import React, { Component, Fragment } from 'react';
import { Content, CheckBox, Header } from 'native-base';
import styled from 'styled-components';

const TextStyled = styled.Text``;

export default class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Header>
        </Header>
        <Content>
          <TextStyled>
            Корзина
          </TextStyled>
          <CheckBox />
        </Content>
      </Fragment>
    );
  }
}