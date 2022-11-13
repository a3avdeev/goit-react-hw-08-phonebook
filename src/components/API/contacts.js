import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  // console.log(data);
  return data;
};

export const addContact = async result => {
  const { data } = await instance.post('/contacts', result);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
