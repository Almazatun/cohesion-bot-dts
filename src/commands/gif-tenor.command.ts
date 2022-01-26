import axios from 'axios';
import { getRandomInt } from '../utils/get-random-index';

const instance = axios.create({
  baseURL: `https://g.tenor.com/v1/search`,
});

export async function gifTenorCommand(title: string): Promise<string> {
  let result: string;
  try {
    const response = await instance.get(`?q=${title}&key=${process.env.TENOR_APIKEY}&contentfilter=high`);
    const gifList = response.data.results;

    if (gifList.length >= 1) {
      const index = getRandomInt(gifList.length);
      result = gifList[index].url;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
}
