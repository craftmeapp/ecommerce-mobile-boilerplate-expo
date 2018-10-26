import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../../actions/cart';
import Cart from '../components/Cart';

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
