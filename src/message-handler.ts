import { Message } from 'discord.js';

import { onropChannel } from './channel/onrop.channel';
import { isIncludeCommandSymbol } from './utils/check-command-symbol';
import { getCommand } from './utils/get-command';
import { isValidCommandKey } from './utils/is-valid-command-key';
import { onropCommandHandler } from './channel-command-handler/onrop.command-handler';
import { REACTS } from './commands/react.command';

export async function messageHandler(message: Message) {
  const userMessage = message.content;
  const channelId = message.channel.id;

  const userTypeCommand = getCommand(userMessage);
  const userTypeCommandKey: string = getCommand(userMessage, 1);

  if (isIncludeCommandSymbol(userMessage)) {
    if (onropChannel.channel_id === channelId) {
      if (onropChannel.aliases.includes(userTypeCommand)) {
        const commandKeysList = { ...onropCommandHandler.wrd };

        if (isValidCommandKey(commandKeysList, userTypeCommandKey)) {
          // @ts-ignore
          message.channel.send(onropCommandHandler[userTypeCommand][userTypeCommandKey]);
        }
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
