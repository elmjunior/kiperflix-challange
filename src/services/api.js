/*
  Dedicated axios configuration file for making API requests
*/

import axios from 'axios';

import {themoviedb} from '../../credentials/themoveidb.js';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

// Parameter setting for API_KEY from API through axios interceptors
api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['api_key'] = themoviedb.api_key;
  return config;
});

export default api;
