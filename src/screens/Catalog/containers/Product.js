import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/products';
import Product from '../components/Product';

const mapStateToProps = state => ({
  products: state.products,
  prices: state.prices,
  regions: state.regions,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    actions,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
