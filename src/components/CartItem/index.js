import React, { Component } from 'react';
import { ListItem, Icon, Button } from 'native-base';
import styled from 'styled-components';
import Swipeout from 'react-native-swipeout';

const TextStyled = styled.Text``;

const TitleContainer = styled.View`
  flex: 2;
`;

const AmountContainer = styled.View`
  flex: 1;
`;

var swipeoutBtns = [
  {
    text: 'Удалить',
    backgroundColor: 'red',
  },
];

export default class Item extends Component {
  handleClick = () => {
    const { index, onPress } = this.props;
    onPress({ index });
  }

  render() {
    const { title, amount } = this.props;

    return (
      <Swipeout right={swipeoutBtns} scroll={() => false}>
        <ListItem button onPress={this.handleClick}>
          <TitleContainer>
            <TextStyled>
              {title}
            </TextStyled>
          </TitleContainer>
          <AmountContainer>
            <TextStyled>
              {`${amount} шт.`}
            </TextStyled>
          </AmountContainer>
        </ListItem>
      </Swipeout>
    );
  }
}