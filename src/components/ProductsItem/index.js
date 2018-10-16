import React, { Component } from 'react';
import { ListItem, Left, Body, Thumbnail } from 'native-base';
import styled from 'styled-components';
import { getProductImageURL } from '../../utils/misc';

const TextStyled = styled.Text``;

const ImageStyled = styled.Image`
  width: 70;
  height: 70;
`;

const ViewStyled = styled.View`

`;

export default class Item extends Component {
  handleClick = () => {
    const { index, onPress } = this.props;
    onPress({ index });
  }

  render() {
    const { title, id, size } = this.props;

    return (
      <ListItem button onPress={this.handleClick}>
        <Thumbnail square large source={{uri: getProductImageURL({ id, size })}} />
        <ViewStyled style={{flex: 1}}>
          <ViewStyled style={{flex: 1, backgroundColor: 'powderblue'}}>
            <TextStyled>
              {title}
            </TextStyled>
          </ViewStyled>
          <ViewStyled style={{flex: 2, backgroundColor: 'skyblue'}} />
        </ViewStyled>
      </ListItem>
    );
  }
}