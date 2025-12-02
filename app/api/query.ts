import { Query } from '@/lib/types';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createQuery = async (query: Omit<Query, 'id' | 'createdAt'>) => {
  // const response = await axios.post('http://localhost:5000/api/queries', query);
  const response = await axios.post(`${baseURL}/queries`, query);
  return response.data;
};