import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://635af1226f97ae73a63a2060.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  // console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
