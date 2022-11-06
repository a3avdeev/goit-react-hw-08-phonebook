import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async signupData => {
  const { data } = await instance.post('/users/signup', signupData);
  setAuthHeader(data.token);
  return data;
};

export const login = async loginData => {
  const { data } = await instance.post('/users/login', loginData);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const getCurrentUser = async token => {
  try {
    setAuthHeader(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setAuthHeader();
    throw error;
  }
};

export default instance;
