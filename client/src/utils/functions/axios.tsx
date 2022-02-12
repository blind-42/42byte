import axios from 'axios';

const baseURL = 'http://211.253.31.22:8080';

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  function setConfig(parameter) {
    const config = parameter;

    config.headers = {
      'Content-Type' : 'application/json',
    }

    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  }
)

export default instance;