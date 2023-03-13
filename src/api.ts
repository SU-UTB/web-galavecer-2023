import axios from 'axios';

const API_BASE_URL = 'http://sdtest.wz.cz/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
