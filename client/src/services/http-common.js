import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: API,
  headers: {
    'Content-type': 'application/json',
  },
});
