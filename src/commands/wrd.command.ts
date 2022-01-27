import * as lettersJSON from '../constants/letters.json';
import * as numbersJSON from '../constants/numbres.json';

interface Json {
  [key: string]: string
}

const lettersAndNumbers: Json = { ...lettersJSON, ...numbersJSON };

function isLongLength(userTypeSymbolList: string[]) {
  let result: boolean = false;

  const len: number = userTypeSymbolList.length;

  if (len > 35) {
    result = true;
  }

  return result;
}

function getDiscordAlphabetNumSymbols(userTypeSymbolList: string[]): string {
  const characters: string[] = [];

  const keyList = Object.keys({ ...lettersJSON, ...numbersJSON });

  for (const userTypeSymbol of userTypeSymbolList) {
    const isExistSymbol = keyList.includes(userTypeSymbol);

    if (isExistSymbol) {
      characters.push(lettersAndNumbers[userTypeSymbol]);
    } else {
      characters.push(' ❌ ');
    }
  }

  return characters.join('');
}

export function wrdCommand(userTypeSymbols: string): string {
  let result: string;
  const userTypeCharacters = userTypeSymbols.trim().toLowerCase().split('');

  if (!isLongLength(userTypeCharacters)) {
    result = getDiscordAlphabetNumSymbols(userTypeCharacters);
  } else {
    const longWord = 'long-word';
    const characterSymbols = getDiscordAlphabetNumSymbols(longWord.split(''));
    result = `🤬 ${characterSymbols} 🤬`;
  }

  return result;
}
