import React, { Component } from 'react';
import { ListItem, Icon } from 'native-base';
import styled from 'styled-components';
import Swipeout from 'react-native-swipeout';

const TextStyled = styled.Text``;

const TitleContainer = styled.View`
  flex: 2;
`;

const AmountContainer = styled.View`
  flex: 1;
`;

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.swipeoutBtns = [
      {
        text: 'Удалить',
        backgroundColor: 'red',
        onPress: this.handleRemove,
      },
    ];
  }

  handleRemove = () => {
    const { index, onRemove } = this.props;
    onRemove({ index });
  }

  handlePress = () => {
    const { index, onPress } = this.props;
    onPress({ index });
  }

  render() {
    const { title, amount } = this.props;

    return (
      <Swipeout right={this.swipeoutBtns}>
        <ListItem button onPress={this.handlePress}>
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