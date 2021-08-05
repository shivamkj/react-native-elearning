import axios from 'axios';

const client = axios.create({
  baseURL: 'https://edua.in/app/',
});

const setHeader = async (userId, accessToken) => {
  console.log('setting headers');
  client.defaults.headers.common['Access-Token'] = accessToken;
  client.defaults.headers.common['User-id'] = userId;
  console.log('setted headers', accessToken, userId);

};

const removeHeader = async () => {
  delete client.defaults.headers.common['Access-Token'];
  delete client.defaults.headers.common['User-id'];
};

export default client;
export {setHeader, removeHeader};
