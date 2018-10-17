import { createStackNavigator } from 'react-navigation';
import Catalog from './containers/Catalog';
import Products from './containers/Products';
import Product from './containers/Product';

export default createStackNavigator(
  {
    Catalog: {
      screen: Catalog,
    },
    Products: {
      screen: Products,
    },
    Product: {
      screen: Product,
    }
  },
  {
    initialRouteName: 'Catalog',
  }
);