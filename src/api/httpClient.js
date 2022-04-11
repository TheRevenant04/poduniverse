import axios from 'axios';
import CryptoJS from 'crypto-js';

const apiHeaderTime = new Date().getTime() / 1000;
// eslint-disable-next-line operator-linebreak
const hashInput =
  process.env.VUE_APP_API_AUTH_KEY + process.env.VUE_APP_API_SECRET_KEY + apiHeaderTime;

const hash = CryptoJS.SHA1(hashInput).toString(CryptoJS.enc.Hex);

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'X-Auth-Key': process.env.VUE_APP_API_AUTH_KEY,
    'X-Auth-Date': apiHeaderTime,
    Authorization: hash,
    'Content-Type': 'application/json',
  },
});

export default httpClient;
