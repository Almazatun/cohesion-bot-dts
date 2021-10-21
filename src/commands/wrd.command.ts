import { REPLY_WORD } from '../constants/reply-word.regional-indicators';

interface Words {
  [key: string]: string
}

export const WORDS: Words = {
  __name: 'wrd',
  django: REPLY_WORD.django,
  cohesion: REPLY_WORD.cohesion,
  congratulation: REPLY_WORD.congratulation,
  45: REPLY_WORD.fortyFiveMin,
  success: REPLY_WORD.success,
  watermelon: REPLY_WORD.watermelon,
};
