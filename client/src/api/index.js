import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
});

async function getProducts(term = '') {
  const { data } = await client.get(`/products?keyword=${term}`);
  return data;
}

export { getProducts };
