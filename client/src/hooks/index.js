import * as api from '../api';
import { useQuery } from 'react-query';

// get all products
const useAllProducts = (term) => {
  return useQuery('products', () => api.getProducts(term));
};

export { useAllProducts };
