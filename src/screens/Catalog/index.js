import { createStackNavigator } from 'react-navigation';
import Catalog from './containers/Catalog';
import Products from './containers/Products';

export default createStackNavigator(
  {
    Catalog: {
      screen: Catalog,
    },
    Products: {
      screen: Products,
    },
  },
  {
    initialRouteName: 'Catalog',
  }
);