import { SlashCommandBuilder } from '@discordjs/builders';

import { SlashCommand, SlashSubCommand } from '../common/enums/commands.enum';

export function generalSlashCmdBuilder() {
  return new SlashCommandBuilder()
    .setName(SlashCommand.INFO)
    .setDescription('Get Information about user or server!')
    .addSubcommand(subcommand => subcommand
      .setName(SlashSubCommand.ME)
      .setDescription('Information about user'))
    .addSubcommand(subcommand => subcommand
      .setName(SlashSubCommand.SERVER)
      .setDescription('Information about server'))
    .addSubcommand(subcommand => subcommand
      .setName(SlashSubCommand.COMMANDS)
      .setDescription('Information about bot commands'));
}
