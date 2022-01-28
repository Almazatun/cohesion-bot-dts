import { getDiscordAlphabetNumSymbols } from '../helpers/get-discord-alphabet-num-symbols';

function isLongWordLength(userTypeSymbolList: string[]) {
  let result: boolean = false;

  const len: number = userTypeSymbolList.length;

  if (len > 35) {
    result = true;
  }

  return result;
}

export function wrdCommand(userTypeTitle: string): string {
  let result: string;
  const userTypeLetters: string[] = userTypeTitle.trim().toLowerCase().split('');

  if (!isLongWordLength(userTypeLetters)) {
    result = getDiscordAlphabetNumSymbols(userTypeLetters);
  } else {
    const longWord = 'long-word';
    const longWordList = longWord.split('');
    const discordAlphabetNumSymbols = getDiscordAlphabetNumSymbols(longWordList);
    result = `🤬 ${discordAlphabetNumSymbols} 🤬`;
  }

  return result;
}
