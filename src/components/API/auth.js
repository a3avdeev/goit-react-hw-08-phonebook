import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// const setAuthHeader = token => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   instance.defaults.headers.common.Authorization = '';
// };

const setToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

export const signup = async signupData => {
  const { data } = await instance.post('/users/signup', signupData);
  // setAuthHeader(data.token);
  setToken.set(data.token);
  return data;
};

export const login = async loginData => {
  const { data } = await instance.post('/users/login', loginData);
  // setAuthHeader(data.token);
  setToken.set(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  // clearAuthHeader();
  setToken.unset();
  return data;
};

export const getCurrentUser = async token => {
  try {
    const { data } = await instance.get('/users/current');
    // setAuthHeader(token);
    setCurrentToken(token);
    setToken.set(data.token);

    return data;
  } catch (error) {
    // setAuthHeader();
    setCurrentToken();
    throw error;
  }
};

export default instance;
