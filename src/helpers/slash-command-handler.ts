import { Interaction } from 'discord.js';

import { SlashCommand, SlashSubCommand } from '../common/enums/commands.enum';
import { errorLogger } from './logger/error.logger';
import { commandsEmbed, meEmbed, serverEmbed, vcruEmbed } from '../embed';
import { vcruNews } from './vcru/vcru-news';

export async function slashCommandHandler(interaction: Interaction) {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === SlashCommand.INFO) {
    if (interaction.options.getSubcommand() === SlashSubCommand.ME) {
      interaction.channel.send({ embeds: [meEmbed(interaction)] })
        .catch((error) => {
          errorLogger('INFO / ME', error);
        });
    } else if (interaction.options.getSubcommand() === SlashSubCommand.SERVER) {
      interaction.channel.send({ embeds: [serverEmbed(interaction)] })
        .catch((error) => {
          errorLogger('INFO / SERVER', error);
        });
    } else if (interaction.options.getSubcommand() === SlashSubCommand.COMMANDS) {
      interaction.channel.send({ embeds: [commandsEmbed()] })
        .catch((error) => {
          errorLogger('INFO / COMMANDS', error);
        });
    }
  }

  if (commandName === SlashCommand.NEWS) {
    if (interaction.channelId === process.env.VC_NEWS_CHANNEL_ID) {
      const vcruNewsData = await vcruNews();
      interaction.channel.send({
        embeds: [vcruEmbed(vcruNewsData)],
      }).catch((error) => {
        errorLogger('NEWS / VC', error);
      });
    }
  }
}
