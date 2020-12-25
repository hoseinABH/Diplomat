import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
});

async function getProducts() {
  const { data } = await client.get('/products');
  return data;
}

export { getProducts };
