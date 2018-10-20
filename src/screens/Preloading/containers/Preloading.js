import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../../actions/products';
import * as catalogActions from '../../../actions/catalog';
import * as regionsActions from '../../../actions/regions';
import * as pricesActions from '../../../actions/prices';

import Preloading from '../components/Preloading';

const mapStateToProps = state => ({
  products: state.products,
  catalog: state.catalog,
  regions: state.regions,
  prices: state.prices,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
  ...bindActionCreators(catalogActions, dispatch),
  ...bindActionCreators(regionsActions, dispatch),
  ...bindActionCreators(pricesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preloading);
