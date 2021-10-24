import { Message } from 'discord.js';

export interface Reacts {
  _name: string
  react1: (message: Message) => Promise<void>
  react2: (message: Message) => Promise<void>
}

export const REACTS: Reacts = {
  _name: 'react',
  react1: async (message: Message) => {
    await Promise.all([
      message.react('👍'),
      message.react('👎'),
    ])
      .catch(error => console.error('One of the emojis failed to react:', error));
  },
  react2: async (message: Message) => {
    Promise.all([
      message.react('🍎'),
      message.react('🍊'),
      message.react('🍇'),
    ])
      .catch(error => console.error('One of the emojis failed to react:', error));
  },
};
