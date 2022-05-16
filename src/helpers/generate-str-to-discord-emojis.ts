import * as lettersJSON from '../constants/letters.json';
import * as numbersJSON from '../constants/numbres.json';

interface DiscordEmojis {
  [key: string]: string
}

const DISCORD_LETTER_AND_NUMBER_EMOJIS: DiscordEmojis = { ...lettersJSON, ...numbersJSON };

export function generateStrToDiscordEmojis(characters: string[]): string {
  const result: string[] = [];
  const letterAndNumberEmojiKeys = Object.keys({
    ...lettersJSON,
    ...numbersJSON,
  });

  for (const character of characters) {
    const isExist = letterAndNumberEmojiKeys.includes(character);

    if (isExist) {
      result.push(DISCORD_LETTER_AND_NUMBER_EMOJIS[character]);
    }

    if (!isExist) {
      result.push(' ❌ ');
    }
  }

  return result.join('');
}
