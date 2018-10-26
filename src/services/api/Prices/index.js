import axios from 'axios';
import { API_HOST } from '../../../constants';

export const recievePrices = ({ login }) => axios.get(`${API_HOST}/get_prices.php`, {
  params: {
    login,
  },
});
