import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_API
});

export const getUser = async () => {
  return await (instance.get('/user')
    .then(response => response.data)
    .catch(error => { console.log(error.message); }));
};

export default { getUser };