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
      { name: 'BLaBla', value: 'π€π€π½π€π»π½π€πππππππππβ€οΈπππ' },
      { name: 'BLaBla', value: 'π§π€’ππΎπ€π½πΊπΉπ©π©πππ€π€ππππβ€οΈπ' },
    )
    .setTimestamp(new Date());

  return serverInfoEmbed;
}
