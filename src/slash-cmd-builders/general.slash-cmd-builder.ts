import { SlashCommandBuilder } from '@discordjs/builders';

export function generalSlashCmdBuilder() {
  return new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get Information about user or server!')
    .addSubcommand(subcommand => subcommand
      .setName('me')
      .setDescription('Information about user'))
    .addSubcommand(subcommand => subcommand
      .setName('server')
      .setDescription('Information about server'))
    .addSubcommand(subcommand => subcommand
      .setName('commands')
      .setDescription('Information about bot commands'));
}
