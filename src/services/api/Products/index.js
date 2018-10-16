import axios from 'axios';
import { API_HOST } from '../../../constants';

export const recieveProducts = ({ login }) => axios.get(`${API_HOST}/get_products.php`, {
  params: {
    login,
  }
});
