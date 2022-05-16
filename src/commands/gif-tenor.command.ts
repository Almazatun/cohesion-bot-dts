import { getRandomInt } from '../utils/get-random-index';

import { instance } from '../helpers/axios_instance';

import { errorLogger } from '../helpers/logger/error.logger';

export async function gifTenorCommand(title: string): Promise<string> {
  let result: string;
  try {
    const response = await instance.get(`?q=${title}&key=${process.env.TENOR_APIKEY}&contentfilter=high`);
    const gifList = response.data.results;

    if (gifList.length >= 1) {
      result = gifList[getRandomInt(gifList.length)].url;
    }
  } catch (error) {
    errorLogger('gifTenorCommand', error);
  }

  return result;
}
