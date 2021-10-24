import { REPLY_WORD } from '../constants/reply-word.regional-indicators';

export interface Words {
  _name: string
  django: string
  cohesion: string
  congratulation: string
  fortyFive: string
  success: string
  watermelon: string
}

export const WORDS: Words = {
  _name: 'wrd',
  django: REPLY_WORD.django,
  cohesion: REPLY_WORD.cohesion,
  congratulation: REPLY_WORD.congratulation,
  fortyFive: REPLY_WORD.fortyFiveMin,
  success: REPLY_WORD.success,
  watermelon: REPLY_WORD.watermelon,
};
