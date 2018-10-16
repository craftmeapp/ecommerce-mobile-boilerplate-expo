import React, { Component } from 'react';
import { Content, List } from 'native-base';
import CatalogItem from '../../../components/CatalogItem';
import { LOGIN } from '../../../constants';

export default class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentParent: 0,
    };
  }

  componentWillMount() {
    const { fetchCatalog, catalog } = this.props;
    
    if (!catalog.isAvailable)
      fetchCatalog({ login: LOGIN });
  }

  handleClick = ({ index }) => {
    this.props.navigation.navigate('Products', { category: index });
  }

  renderCatalogList() {
    const { catalog } = this.props;
    const { currentParent } = this.state;

    const items = catalog.items.sort((a, b) => a.index_number < b.index_number).map(item => (
      parseInt(item.parent) === currentParent
        ? <CatalogItem key={item.title} index={item.id} title={item.title} onPress={this.handleClick} />
        : null
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