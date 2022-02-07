import { instanceVCRU } from '../axios_instance';

import { VCRUData, vcruParser } from './vcru-parser';

export async function vcruNews(): Promise<VCRUData> {
  const response = await instanceVCRU.get('');

  return vcruParser(response.data);
}
