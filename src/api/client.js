import axios from 'axios';

const client = axios.create({
  baseURL: 'https://edua.in/app/',
  // baseURL: 'https://staging.edua.in/app/',
});

const setHeader = async (userId, accessToken) => {
  client.defaults.headers.common['Access-Token'] = accessToken;
  client.defaults.headers.common['User-id'] = userId;
};

const removeHeader = async () => {
  delete client.defaults.headers.common['Access-Token'];
  delete client.defaults.headers.common['User-id'];
};

export default client;
export {setHeader, removeHeader};
