// from axios instance

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
type CreateProductRequest = Omit<ProductModel, 'id'>;

const fetchProducts = async () => {
  const response = await api.get<ProductModel[]>('/products');
  return response.data;
};

const fetchProduct = async (id: string | number) => {
  const response = await api.get<ProductModel>(`/products/${id}`);

  return response.data;
};

const addProduct = async (productData: CreateProductRequest) => {
  const response = await api.post<ProductModel>('/products', productData);

  return response.data;
};

const updateProduct = async (id: string, productData: Omit<ProductModel, 'id'>) => {
  const response = await api.patch<ProductModel[]>(`/products/${id}`, productData);

  return response.data;
};

const deleteProduct = async (id: string | number) => {
  await api.delete(`products/${id}`);
};

const ApiService = {
  fetchProducts,
  fetchProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default ApiService;
