import React, { Component } from 'react';
import { Content, CheckBox } from 'native-base';
import styled from 'styled-components';

const TextStyled = styled.Text``;

export default class Cart extends Component {
  render() {
    return (
      <Content>
        <TextStyled>
          Корзина
        </TextStyled>
        <CheckBox />
      </Content>
    );
  }
}