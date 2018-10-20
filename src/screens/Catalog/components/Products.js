import React, { Component } from 'react';
import { Content, List, ListItem } from 'native-base';
import Item from '../../../components/ProductsItem';
import { LOGIN } from '../../../constants';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentParent: 0,
    };
  }

  componentWillMount() {
    const { fetchProducts, products } = this.props;
    
    if (!products.isAvailable)
      fetchProducts({ login: LOGIN });
  }

  handleClick = ({ index }) => {
    this.props.navigation.navigate('Product', { product: index });
  }

  renderProductsList() {
    const { navigation, productsByCategories, regions, prices } = this.props;
    const { currentParent } = this.state;
    const currentCategory = navigation.getParam('category');

    const categoryProducts = productsByCategories[currentCategory];

    if (!categoryProducts)
      return null;

    const items = categoryProducts.map(item => {
      if (parseInt(item.parent) === currentParent) {
        const price = prices.items.find(price => price.dish === item.id && price.region === regions.currentRegion);

        return (
          <Item
            key={item.title}
            index={item.id}
            title={item.title}
            id={item.id}
            size={0}
            onPress={this.handleClick}
            cost={price.cost}
          />
        );
      }

      return null;
    });

    return (
      <List>
        {items}
      </List>
    );
  }

  render() {
    const  productsList = this.renderProductsList();

    return (
      <Content>
        {productsList}
      </Content>
    );
  }
}