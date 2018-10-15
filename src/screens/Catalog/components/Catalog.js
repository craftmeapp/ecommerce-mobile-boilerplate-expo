import React, { Component } from 'react';
import { Content, List, ListItem } from 'native-base';
import styled from 'styled-components';

const TextStyled = styled.Text``;

export default class Catalog extends Component {
  componentWillMount() {
    const { fetchCatalog, catalog } = this.props;
    
    if (!catalog.isAvailable)
      fetchCatalog({ login: 'susheriya' });
  }

  renderCatalogList() {
    const { catalog } = this.props;

    const items = catalog.items.map(item => (
      <ListItem key={item.title}>
        <TextStyled>
          {item.title}
        </TextStyled>
      </ListItem>
    ));

    return (
      <List>
        {items}
      </List>
    );
  }

  render() {
    const catalogList = this.renderCatalogList();

    return (
      <Content>
        {catalogList}
      </Content>
    );
  }
}