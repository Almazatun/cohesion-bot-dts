import { Message } from 'discord.js';

import { REPLY_WORD } from './constants/reply-word.regional-indicators';
import { onropChannel } from './channel/onrop.channel';
import { isIncludeCommandSymbol } from './utils/check-command-symbol';
import { getCommand } from './utils/get-command';
import { WORDS } from './commands/wrd.command';
import { isValidCommandKey } from './utils/is-valid-command-key';
import { onropCommandHandler } from './channel-command-handler/onrop.command-handler';

export async function channelHandler(message: Message) {
  const userMessage = message.content;
  const channelId = message.channel.id;

  if (onropChannel.channel_id === channelId) {
    if (isIncludeCommandSymbol(userMessage)) {
      const userTypeCommand = getCommand(userMessage);
      const userTypeCommandKey: string = getCommand(userMessage, 1).trim();
      if (onropChannel.aliases.includes(userTypeCommand)) {
        const commandKeysList = { ...WORDS };
        if (isValidCommandKey(commandKeysList, userTypeCommandKey)) {
          message.channel.send(onropCommandHandler[userTypeCommand][userTypeCommandKey]);
        }
      }
    }
  }
  // const isIncludeBackSlash = userMessage.;
  console.log(message.content);
  if (message.content === 'ping') {
    // message.channel.send(':regional_indicator_c: :o2:');
    message.channel.send(REPLY_WORD.fortyFiveMin);
    // const res = await message.channel.send('Pong!');
    // await message.react(':regional_indicator_c:');
    // message.react('O');
    // message.react('h');
    // message.react('e');
    // message.react('s');
    // message.react('i');
    // message.react('o');
    // message.react('n');
  }
}
