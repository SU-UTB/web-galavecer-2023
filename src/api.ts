import axios from 'axios';

const API_BASE_URL = 'https://rezervacesutb.wz.cz';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
