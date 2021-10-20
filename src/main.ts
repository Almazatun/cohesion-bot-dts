import { Client, Intents } from 'discord.js';

import { readyDiscordBot } from './ready-discord-bot';
import { WORDS } from './constants/words.regional-indicators';

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

client.on('message', async (message) => {
  console.log(message.content);
  if (message.content === 'ping') {
    // message.channel.send(':regional_indicator_c: :o2:');
    message.channel.send(WORDS['45']);
    // const res = await message.channel.send('Pong!');
    // await message.react(':regional_indicator_c:');
    // message.react('O');
    // message.react('h');
    // message.react('e');
    // message.react('s');
    // message.react('i');
    // message.react('o');
    // message.react('n');
  }
});

client.on('messageReactionAdd', async (messageReactionAdd) => {
  console.log(messageReactionAdd.message.content === '00');
  if (messageReactionAdd.message.content === '00') {
    // const res = await message.channel.send('Pong!');
    // const res = await messageReactionAdd.fetch();
    // res.('😄');
  }
});

client.login(TOKEN);
