import { Client } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { readyDiscordBot } from './ready-discord-bot';

import { slashCommands } from './slash-cmd-builders';
import { intentsFlags } from './common/intentFlags';

import { messageHandler } from './helpers/message-handler';
import { errorLogger } from './helpers/logger/error.logger';
import { slashCommandHandler } from './helpers/slash-command-handler';

require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;

const client: Client = new Client({
  intents: intentsFlags,
});

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: slashCommands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch((error) => {
    errorLogger('REGISTRATION SLASH COMMANDS', error);
  });

client.on('ready', readyDiscordBot);

client.on('messageCreate', messageHandler);

client.on('interactionCreate', slashCommandHandler);

client.login(TOKEN);
