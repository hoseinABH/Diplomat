import * as api from '../api';
import { useQuery } from 'react-query';

// get all products
const useAllProducts = () => {
  return useQuery('products', api.getProducts);
};

export { useAllProducts };
