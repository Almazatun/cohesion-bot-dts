import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://g.tenor.com/v1/search`,
});
