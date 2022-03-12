import axios from 'axios';

// const baseURL = 'http://api-42byte.shop';
const baseURL = 'https://api-42byte.shop';

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  function setConfig(parameter) {
    const config = parameter;

    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('4242-token')}`,
    };

    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  },
);

export default instance;
