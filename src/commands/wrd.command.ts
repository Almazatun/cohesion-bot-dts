import * as lettersJSON from '../constants/letters.json';

interface JSON {
  [key: string]: string
}

const letters: JSON = lettersJSON;

export function wrdCommand(userWord: string): string {
  const result: string[] = [];
  const letterList = userWord.trim().toLowerCase().split('');
  const letterKeyList = Object.keys(lettersJSON);

  for (const letter of letterList) {
    const isExistLetter = letterKeyList.includes(letter);

    if (isExistLetter) {
      result.push(letters[letter]);
    } else {
      result.push(' ❌ ');
    }
  }

  return result.join('');
}
