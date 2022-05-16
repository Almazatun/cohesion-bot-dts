import { Message } from 'discord.js';

export interface ReactCommand {
  _name: string
  thumbsUpAndDown: (message: Message) => Promise<void>
  fruits: (message: Message) => Promise<void>
  colors: (message: Message) => Promise<void>
}

function thumbsUpAndDown() {
  return {
    thumbsUpAndDown: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('👍'),
        message.react('👎'),
      ]);
    },
  };
}

function fruits() {
  return {
    fruits: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('🍎'),
        message.react('🍊'),
        message.react('🍇'),
      ]);
    },
  };
}

function colors() {
  return {
    colors: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('🟢'),
        message.react('🟡'),
        message.react('🔴'),
      ]);
    },
  };
}

const reacts = {
  ...thumbsUpAndDown(),
  ...fruits(),
  ...colors(),
};

export const reactCommand: ReactCommand = {
  _name: 'react',
  ...reacts,
};
