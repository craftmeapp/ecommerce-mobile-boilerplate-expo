import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../../actions/products';
import * as catalogActions from '../../../actions/catalog';
import Preloading from '../components/Preloading';

const mapStateToProps = state => ({
  products: state.products,
  catalog: state.catalog,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
  ...bindActionCreators(catalogActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preloading);
