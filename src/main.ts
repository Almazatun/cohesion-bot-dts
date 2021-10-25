import { Client, Intents } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { readyDiscordBot } from './ready-discord-bot';
import { messageHandler } from './message-handler';
import { meEmbed } from './embed/user-info.embed';
import { serverEmbed } from './embed/server-info.embed';
import { commandsEmbed } from './embed/commands-info.embed';

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
  new SlashCommandBuilder()
    .setName('gif')
    .setDescription('Sends a random gif!')
    .addStringOption(option => option.setName('category')
      .setDescription('The gif category')
      .setRequired(true)
      .addChoice('Funny', 'gif_funny')
      .addChoice('Meme', 'gif_meme')
      .addChoice('Movie', 'gif_movie')),
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
        .catch(console.error);
    } else if (interaction.options.getSubcommand() === 'server') {
      interaction.channel.send({ embeds: [serverEmbed(interaction)] })
        .catch(console.error);
    } else if (interaction.options.getSubcommand() === 'commands') {
      interaction.channel.send({ embeds: [commandsEmbed()] })
        .catch(console.error);
    }
  }
});

client.login(TOKEN);
