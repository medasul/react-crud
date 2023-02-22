//from axios instance

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    // uzklausos

    // content type application json
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 1 axios uzklausa

const fetchProducts = async () => {
  const response = await api.get<ProductModel[]>('/products');
  return response.data;
};

const ApiService = {
  fetchProducts,
};

export default ApiService;
