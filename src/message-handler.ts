import { Message } from 'discord.js';

import { onropChannel } from './channel/onrop.channel';
import { reactCommand } from './commands/react.command';
import { isIncludeCommandSymbol } from './utils/check-command-symbol';
import { getCommand } from './utils/get-command';
import { wrdCommand } from './commands/wrd.command';
import { cyrillicPattern } from './utils/cyrillic-pattetn';
import { imageCommand } from './commands/image.command';
import { gifCommand } from './commands/gif.command';

export async function messageHandler(message: Message): Promise<void> {
  const userMessage = message.content;
  const channelId = message.channel.id;

  const userTypeCommand = getCommand(userMessage);
  const userTypeCommandKey: string = getCommand(userMessage, 1);

  if (isIncludeCommandSymbol(userMessage)) {
    if (onropChannel.channelId === channelId) {
      const isIncludeCommandInChannel = onropChannel.aliases.includes(userTypeCommand);
      if (isIncludeCommandInChannel) {
        if (userTypeCommand === 'wrd') {
          const discordCodeLetters: string = wrdCommand(userTypeCommandKey);
          message.channel.send(discordCodeLetters);
        }

        if (userTypeCommand === 'gif') {
          const title: string = userMessage.slice(5, userMessage.length - 1);
          const isContainRussLetters = cyrillicPattern.test(title);
          if (!isContainRussLetters) {
            const url = await gifCommand(title);
            if (url !== undefined) {
              message.channel.send(url);
            }
          }
        }

        if (userTypeCommand === 'image') {
          const title: string = userMessage.slice(7, userMessage.length - 1);
          const isContainRussLetters = cyrillicPattern.test(title);
          if (!isContainRussLetters) {
            const url = await imageCommand(title);
            if (url !== undefined) {
              message.channel.send(url);
            }
          }
        }
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
