import axios from 'axios';
import { API_HOST } from '../../../constants';

export const recieveCatalog = ({ login }) => axios.get(`${API_HOST}/get_categories.php`, {
  params: {
    login,
  },
});
