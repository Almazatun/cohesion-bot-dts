import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://g.tenor.com/v1/search`,
});

export const instanceVCRU = axios.create({
  baseURL: `https://vc.ru/`,
  headers: {
    'Accept-encoding': 'gzip, deflate, br',
    // eslint-disable-next-line max-len
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-language': 'en-US,en;q=0.9',
  },
});
