import { createStackNavigator } from 'react-navigation';
import Cart from './containers/Cart';
import Product from '../Catalog/containers/Product';

export default createStackNavigator(
  {
    Cart: {
      screen: Cart,
    },
    ProductPreview: {
      screen: Product,
    },
  },
  {
    initialRouteName: 'Cart',
  },
);
