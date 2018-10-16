import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/products';
import Products from '../components/Products';
import { productsByCategoriesSelector } from '../../../selectors/products';

const mapStateToProps = state => ({
  products: state.products,
  productsByCategories: productsByCategoriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    actions,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
