import axios from 'axios';

const API_BASE_URL = 'http://sdtest.wz.cz/api/nominations';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
