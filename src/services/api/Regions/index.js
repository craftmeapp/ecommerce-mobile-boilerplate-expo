import axios from 'axios';
import { API_HOST } from '../../../constants';

export const recieveRegions = ({ login }) => axios.get(`${API_HOST}/get_regions.php`, {
  params: {
    login,
  }
});
