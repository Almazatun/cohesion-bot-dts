import { instanceVCRU } from '../helpers/axios_instance';
import { vcruParser } from '../helpers/vcru-parser';

export async function vcruNews() {
  const response = await instanceVCRU.get('');

  vcruParser(response.data);
}
