import { API_HOST, LOGIN } from '../constants';

export const getProductImageURL = ({ id, size }) => `${API_HOST}/get_image_prod.php?login=${LOGIN}&&size=${size}&&id=${id}`;