import { MessageEmbed } from 'discord.js';

export function commandsEmbed(): MessageEmbed {
  const userInfoEmbed = new MessageEmbed()
    .setColor('#d9095a')
    .setTitle('Commands')
    .setAuthor('Cohesion bot 🤖')
    .addFields(
      { name: '>wrd',
        value: ' `cohesion` '
          + ' `fortyFive` '
          + ' `watermelon` '
          + ' `congratulation` '
          + ' `django` '
          + ' `success` ',
        inline: true },
    )
    .addFields(
      { name: '>react',
        value: ' `1` '
          + ' `2` ' },
    );

  return userInfoEmbed;
}
