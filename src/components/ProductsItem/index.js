import React, { Component } from 'react';
import { ListItem, Left, Body, Thumbnail } from 'native-base';
import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import { getProductImageURL } from '../../utils/misc';

const TextStyled = styled.Text``;

const ImageStyled = styled.Image`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const ItemContainerStyled = styled.View`
  border-bottom-width: 0.5px;
  border-color: #cccccc;
  background-color: white;
  flex: 1;
  flex-direction: row;
  height: 90px;
`;

const  ItemImageContainerStyled = styled.View`
  border-right-width: 0.5px;
  border-color: #cccccc;
  flex: 1;
`;

const ItemContentContainerStyled = styled.View`
  margin: 10px;
  flex: 2;
`;

export default class Item extends Component {
  handleClick = () => {
    const { index, onPress } = this.props;
    onPress({ index });
  }

  render() {
    const { title, id, size, cost } = this.props;

    return (
      <TouchableOpacity onPress={this.handleClick}>
        <ItemContainerStyled>
          <ItemImageContainerStyled>
            <ImageStyled source={{uri: getProductImageURL({ id, size })}} resizeMode="contain" />
          </ItemImageContainerStyled>
          <ItemContentContainerStyled>
            <View style={{flex: 1}}>
              <TextStyled>
                {title}
              </TextStyled>
            </View>
            <View style={{flex: 1}}>
              <TextStyled>{cost} р.</TextStyled>
            </View>
          </ItemContentContainerStyled>
        </ItemContainerStyled>
      </TouchableOpacity>
    );
  }
}