import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllTruevalueModels = async () => {
  const response = await axios.get(`${baseURL}/true-value/`);
  return response.data;
};