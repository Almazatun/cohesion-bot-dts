import { Client, Intents } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { readyDiscordBot } from './ready-discord-bot';

import { meEmbed } from './embed/user-info.embed';
import { serverEmbed } from './embed/server-info.embed';
import { commandsEmbed } from './embed/commands-info.embed';
import { vcruEmbed } from './embed/vcru.embed';

import { messageHandler } from './helpers/message-handler';
import { vcruNews } from './helpers/vcru/vcru-news';
import { errorLogger } from './helpers/logger/error.logger';

require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;

const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

const commands = [
  new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or a server!')
    .addSubcommand(subcommand => subcommand
      .setName('me')
      .setDescription('Info about a user'))
    .addSubcommand(subcommand => subcommand
      .setName('server')
      .setDescription('Info about the server'))
    .addSubcommand(subcommand => subcommand
      .setName('commands')
      .setDescription('Info about bot command')),

  new SlashCommandBuilder().setName('news').setDescription('VC.RU news')
    .addSubcommand(subcommand => subcommand
      .setName('vc')
      .setDescription('top news')),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);

client.on('ready', readyDiscordBot);

client.on('messageCreate', messageHandler);

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'info') {
    if (interaction.options.getSubcommand() === 'me') {
      interaction.channel.send({ embeds: [meEmbed(interaction)] })
        .catch((error) => {
          errorLogger('INFO / ME', error);
        });
    } else if (interaction.options.getSubcommand() === 'server') {
      interaction.channel.send({ embeds: [serverEmbed(interaction)] })
        .catch((error) => {
          errorLogger('INFO / SERVER', error);
        });
    } else if (interaction.options.getSubcommand() === 'commands') {
      interaction.channel.send({ embeds: [commandsEmbed()] })
        .catch((error) => {
          errorLogger('INFO / COMMANDS', error);
        });
    }
  }

  if (commandName === 'news') {
    if (interaction.channelId === process.env.VC_NEWS_CHANNEL_ID) {
      const vcruNewsData = await vcruNews();
      interaction.channel.send({
        embeds: [vcruEmbed(vcruNewsData)],
      }).catch((error) => {
        errorLogger('NEWS / VC', error);
      });
    }
  }
});

client.login(TOKEN);
