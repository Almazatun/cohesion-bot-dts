import { Message } from 'discord.js';

export interface ReactCommand {
  _name: string
  react1: (message: Message) => Promise<void>
  react2: (message: Message) => Promise<void>
  react3: (message: Message) => Promise<void>
}

function react1() {
  return {
    react1: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('👍'),
        message.react('👎'),
      ]);
    },
  };
}

function react2() {
  return {
    react2: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('🍎'),
        message.react('🍊'),
        message.react('🍇'),
      ]);
    },
  };
}

function react3() {
  return {
    react3: async (message: Message): Promise<void> => {
      await Promise.all([
        message.react('🟢'),
        message.react('🟡'),
        message.react('🔴'),
      ]);
    },
  };
}

const methods = { ...react1(), ...react2(), ...react3() };

export const reactCommand: ReactCommand = {
  _name: 'react',
  ...methods,
};
