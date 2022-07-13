import axios from 'axios';
import CryptoJS from 'crypto-js';

class HttpClient {
  apiHeaderTime;

  hashInput;

  hash;

  httpClient;

  constructor() {
    this.apiHeaderTime = new Date().getTime() / 1000;
    this.hashInput = process.env.VUE_APP_API_AUTH_KEY + process.env.VUE_APP_API_SECRET_KEY
      + this.apiHeaderTime;
    this.hash = CryptoJS.SHA1(this.hashInput).toString(CryptoJS.enc.Hex);
    this.httpClient = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL,
      headers: {
        'X-Auth-Key': process.env.VUE_APP_API_AUTH_KEY,
        'X-Auth-Date': this.apiHeaderTime,
        Authorization: this.hash,
        'Content-Type': 'application/json',
      },
    });
  }

  getHttpClient() {
    return this.httpClient;
  }
}

export default HttpClient;
