import { generateStrToDiscordEmojis } from '../helpers/generate-str-to-discord-emojis';

function isLongStringLength(str: string) {
  let result: boolean = false;

  if (str.length > 35) {
    result = true;
  }

  return result;
}

function splitString(str: string): string[] {
  return str.trim().toLowerCase().split('');
}

export function wrdCommand(str: string): string {
  let result: string;

  if (!isLongStringLength(str)) {
    result = generateStrToDiscordEmojis(splitString(str));
  }

  if (isLongStringLength(str)) {
    result = `🤬 ${generateStrToDiscordEmojis(splitString('long-word'))} 🤬`;
  }

  return result;
}
