import { Interaction, MessageEmbed } from 'discord.js';

export function meEmbed(iteration : Interaction): MessageEmbed {
  const { user } = iteration;

  const userInfoEmbed = new MessageEmbed()
    .setColor('#2bba48')
    .setTitle('User info')
    .setAuthor('Cohesion bot 🤖')
    .addFields(
      { name: 'Username', value: `${user.username}` },
      { name: 'Join to discord', value: `${user.createdAt}` },
    )
    .setImage(user.avatarURL())
    .setTimestamp(new Date());

  return userInfoEmbed;
}
