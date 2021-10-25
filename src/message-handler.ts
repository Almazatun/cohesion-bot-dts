import { Message } from 'discord.js';

import { onropChannel } from './channel/onrop.channel';
import { reactCommand } from './commands/react.command';
import { isIncludeCommandSymbol } from './utils/check-command-symbol';
import { getCommand } from './utils/get-command';
import { wrdCommand } from './commands/wrd.command';

export async function messageHandler(message: Message) {
  const userMessage = message.content;
  const channelId = message.channel.id;

  const userTypeCommand = getCommand(userMessage);
  const userTypeCommandKey: string = getCommand(userMessage, 1);

  if (isIncludeCommandSymbol(userMessage)) {
    if (onropChannel.channelId === channelId) {
      const isIncludeCommandInChannel = onropChannel.aliases.includes(userTypeCommand);
      if (isIncludeCommandInChannel) {
        const discordCodeLetters: string = wrdCommand(userTypeCommandKey);
        message.channel.send(discordCodeLetters);
      }
    }

    if (userTypeCommand === 'react1') {
      await reactCommand.react1(message);
    }

    if (userTypeCommand === 'react2') {
      await reactCommand.react2(message);
    }

    if (userTypeCommand === 'react3') {
      await reactCommand.react3(message);
    }
  }
}
