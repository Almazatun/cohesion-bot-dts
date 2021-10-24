import { Words, WORDS } from '../commands/wrd.command';

type WrdCommands = Pick<Words, 'cohesion' | 'django' | 'fortyFive'>

interface OnropCommandHandler {
  wrd: WrdCommands
}

const { cohesion, fortyFive, django } = WORDS;

export const onropCommandHandler : OnropCommandHandler = {
  wrd: {
    cohesion,
    fortyFive,
    django,
  },
};
