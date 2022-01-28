import * as lettersJSON from '../constants/letters.json';
import * as numbersJSON from '../constants/numbres.json';

interface Json {
  [key: string]: string
}

const lettersAndNumbers: Json = { ...lettersJSON, ...numbersJSON };

export function getDiscordAlphabetNumSymbols(userTypeLetters: string[]): string {
  const discordAlphabetNumList: string[] = [];

  const keyList = Object.keys({ ...lettersJSON, ...numbersJSON });

  for (const userTypeSymbol of userTypeLetters) {
    const isExistLetterOrNum = keyList.includes(userTypeSymbol);

    if (isExistLetterOrNum) {
      discordAlphabetNumList.push(lettersAndNumbers[userTypeSymbol]);
    } else {
      discordAlphabetNumList.push(' ❌ ');
    }
  }

  return discordAlphabetNumList.join('');
}
