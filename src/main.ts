import { Client, Intents } from 'discord.js';

import { readyDiscordBot } from './ready-discord-bot';
import { channelHandler } from './channel-handler';

require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;

const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on('ready', readyDiscordBot);

client.on('message', channelHandler);

client.on('messageReactionAdd', async (messageReactionAdd) => {
  console.log(messageReactionAdd.message.content === '00');
  if (messageReactionAdd.message.content === '00') {
    // const res = await message.channel.send('Pong!');
    // const res = await messageReactionAdd.fetch();
    // res.('😄');
  }
});

client.login(TOKEN);
