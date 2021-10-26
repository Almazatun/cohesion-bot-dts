import * as lettersJSON from '../constants/letters.json';
import * as numbersJSON from '../constants/numbres.json';

interface JSON {
  [key: string]: string
}

const lettersAndNumbers: JSON = { ...lettersJSON, ...numbersJSON };

export function wrdCommand(userTypeSymbols: string): string {
  const result: string[] = [];
  const userTypeSymbolList = userTypeSymbols.trim().toLowerCase().split('');
  const keyList = Object.keys({ ...lettersJSON, ...numbersJSON });

  for (const userTypeSymbol of userTypeSymbolList) {
    const isExistSymbol = keyList.includes(userTypeSymbol);

    if (isExistSymbol) {
      result.push(lettersAndNumbers[userTypeSymbol]);
    } else {
      result.push(' ❌ ');
    }
  }

  return result.join('');
}
