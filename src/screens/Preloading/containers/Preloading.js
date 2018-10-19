import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../../actions/products';
import * as catalogActions from '../../../actions/catalog';
import * as regionsActions from '../../../actions/regions';
import Preloading from '../components/Preloading';

const mapStateToProps = state => ({
  products: state.products,
  catalog: state.catalog,
  regions: state.regions,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
  ...bindActionCreators(catalogActions, dispatch),
  ...bindActionCreators(regionsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preloading);
