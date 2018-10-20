import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../../actions/products';
import * as cartActions from '../../../actions/cart';
import Product from '../components/Product';

const mapStateToProps = state => ({
  products: state.products,
  prices: state.prices,
  regions: state.regions,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
