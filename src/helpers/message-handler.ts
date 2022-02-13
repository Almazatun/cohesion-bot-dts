import { Message } from 'discord.js';

import { onropChannel } from '../channel/onrop.channel';

import { reactCommand } from '../commands/react.command';
import { wrdCommand } from '../commands/wrd.command';
import { gifTenorCommand } from '../commands/gif-tenor.command';

import { isIncludeCommandSymbol } from '../utils/check-command-symbol';
import { getCommand } from '../utils/get-command';
import { cyrillicPattern } from '../utils/cyrillic-pattetn';

import { Command } from '../common/enums/commands.enum';

export async function messageHandler(message: Message): Promise<void> {
  const userMessage = message.content;
  const channelId = message.channel.id;
  const { username } = message.author;

  const userTypeCommand = getCommand(userMessage);
  const userTypeCommandKey: string = getCommand(userMessage, 1);

  if (isIncludeCommandSymbol(userMessage)) {
    if (onropChannel.channelId === channelId) {
      const isIncludeCommandInChannel = onropChannel.aliases.includes(userTypeCommand);
      if (isIncludeCommandInChannel) {
        if (userTypeCommand === Command.WRD) {
          const discordCodeLetters: string = wrdCommand(userTypeCommandKey);
          await Promise.all([
            message.channel.send(discordCodeLetters),
            message.channel.send(`🤖 WRD Title: ${userTypeCommandKey}\nUsername : ${username}`),
            message.delete(),
          ]);
        }

        if (userTypeCommand === Command.GIF) {
          const title: string = userMessage.slice(5, userMessage.length);
          const isContainRussLetters = cyrillicPattern.test(title);

          if (!isContainRussLetters) {
            const url = await gifTenorCommand(title);
            if (url !== undefined) {
              await Promise.all([
                message.channel.send(url),
                message.channel.send(`🤖 Tenor GIF: ${title}\nUsername: ${username}`),
                message.delete(),
              ]);
            }
          }
        }
      }
    }

    if (userTypeCommand === Command.REACT_1) {
      await reactCommand.react1(message);
    }

    if (userTypeCommand === Command.REACT_2) {
      await reactCommand.react2(message);
    }

    if (userTypeCommand === Command.REACT_3) {
      await reactCommand.react3(message);
    }
  }
}
