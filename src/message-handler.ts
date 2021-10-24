import { Message } from 'discord.js';

import { onropChannel } from './channel/onrop.channel';
import { isIncludeCommandSymbol } from './utils/check-command-symbol';
import { getCommand } from './utils/get-command';
import { REACTS } from './commands/react.command';
import { wrdCommand } from './commands/wrd.command';

export async function messageHandler(message: Message) {
  const userMessage = message.content;
  const channelId = message.channel.id;

  const userTypeCommand = getCommand(userMessage);
  const userTypeCommandKey: string = getCommand(userMessage, 1);

  if (isIncludeCommandSymbol(userMessage)) {
    if (onropChannel.channel_id === channelId) {
      if (onropChannel.aliases.includes(userTypeCommand)) {
        const discordCodeLetters: string = wrdCommand(userTypeCommandKey);
        message.channel.send(discordCodeLetters);
      }
    }

    if (userTypeCommand === 'react1') {
      await REACTS.react1(message);
    }

    if (userTypeCommand === 'react2') {
      await REACTS.react2(message);
    }
  }
}
