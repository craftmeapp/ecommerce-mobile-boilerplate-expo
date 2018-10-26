import React, { Component } from 'react';
import { Content, CheckBox } from 'native-base';
import styled from 'styled-components';

const TextStyled = styled.Text``;

export default class About extends Component {
  render() {
    return (
      <Content>
        <TextStyled>
          О нас
        </TextStyled>
        <CheckBox />
      </Content>
    );
  }
}
