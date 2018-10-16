import React, { Component } from 'react';
import { Content, List, ListItem } from 'native-base';
import styled from 'styled-components';

const TextStyled = styled.Text``;

export default class Item extends Component {
  handleClick = () => {
    const { index, onPress } = this.props;
    onPress({ index });
  }

  render() {
    const { title } = this.props;

    return (
      <ListItem button onPress={this.handleClick}>
        <TextStyled>
          {title}
        </TextStyled>
      </ListItem>
    );
  }
}