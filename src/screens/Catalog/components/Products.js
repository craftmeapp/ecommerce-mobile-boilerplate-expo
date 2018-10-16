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
    
  }

  renderProductsList() {
    const { navigation, productsByCategories } = this.props;
    const { currentParent } = this.state;
    const currentCategory = navigation.getParam('category');

    const categoryProducts = productsByCategories[currentCategory];
    console.log(categoryProducts);
    if (!categoryProducts)
      return null;

    const items = categoryProducts.map(item => (
      parseInt(item.parent) === currentParent
        ? <Item key={item.title} index={item.id} title={item.title} id={item.id} size={0} onPress={this.handleClick} />
        : null
    ));

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