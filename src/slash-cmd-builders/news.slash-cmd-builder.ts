import { SlashCommandBuilder } from '@discordjs/builders';

export function newsSlashCmdBuilder() {
  return new SlashCommandBuilder()
    .setName('news')
    .setDescription('VC.RU news')
    .addSubcommand(subcommand => subcommand
      .setName('vc')
      .setDescription('Top news'));
}
