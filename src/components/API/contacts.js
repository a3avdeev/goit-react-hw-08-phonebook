import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/');
  // console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
