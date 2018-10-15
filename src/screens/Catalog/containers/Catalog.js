import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/catalog';
import Catalog from '../components/Catalog';

const mapStateToProps = state => ({
  catalog: state.catalog,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    actions,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
