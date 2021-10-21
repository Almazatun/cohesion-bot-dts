import { WORDS } from '../commands/wrd.command';

export const onropCommandHandler: {[key: string]: typeof WORDS} = {
  wrd: {
    ...WORDS,
  },
};
