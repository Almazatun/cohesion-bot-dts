import { Interaction, MessageEmbed } from 'discord.js';

export function serverEmbed(iteration : Interaction): MessageEmbed {
  const { guild } = iteration;
  const { name, memberCount } = guild;

  const icon = guild.iconURL();

  const serverInfoEmbed = new MessageEmbed()
    .setColor('#2bba48')
    .setThumbnail(icon)
    .setTitle('Server info')
    .addFields(
      { name: 'Server name', value: `${name}` },
      { name: 'Members count', value: `${memberCount}` },
      { name: 'BLaBla', value: '🤖🤓👽🤖👻👽🤓😎😋😍😂😇😜💛💚💙❤️💟💓💗' },
      { name: 'BLaBla', value: '🧐🤢🙀😾🤖👽👺👹💩💩🙁😎🤗🤕😜💛💚💙❤️💟' },
    )
    .setTimestamp(new Date());

  return serverInfoEmbed;
}
