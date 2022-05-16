import { Message } from 'discord.js';

import { Command } from '../common/enums/commands.enum';
import { reactCommand } from '../commands';

export async function reactCommandHandler(command: string, message: Message): Promise<void> {
  switch (command) {
    case Command.REACT_1:
      await reactCommand.thumbsUpAndDown(message);
      break;
    case Command.REACT_2:
      await reactCommand.fruits(message);
      break;
    case Command.REACT_3:
      await reactCommand.colors(message);
      break;
    default:
  }
}
