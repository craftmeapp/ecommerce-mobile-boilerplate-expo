import { createAction } from 'redux-actions';

import {
  READ_CATALOG_REQUEST,
  READ_CATALOG_FAILURE,
  READ_CATALOG_SUCCESS,
} from './actionTypes';

import { recieveCatalog } from '../../services/api/Catalog';

const onRecieveCatalogsSuccess = ({ data }) => ({
  data,
});

const onRecieveCatalogsFailure = ({ error }) => ({
  error,
});

const fetchCatalogsSuccess = createAction(READ_CATALOG_SUCCESS, onRecieveCatalogsSuccess);
const fetchCatalogsFailure = createAction(READ_CATALOG_FAILURE, onRecieveCatalogsFailure);
const fetchCatalogsRequest = createAction(READ_CATALOG_REQUEST);

export const fetchCatalog = ({ login }) =>
  (dispatch) => {
    dispatch(fetchCatalogsRequest());

    recieveCatalog({ login })
      .then(data => dispatch(fetchCatalogsSuccess({ data })))
      .catch(error => dispatch(fetchCatalogsFailure({ error })));
  };

