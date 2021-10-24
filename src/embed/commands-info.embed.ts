import { MessageEmbed } from 'discord.js';

export function commandsEmbed(): MessageEmbed {
  const userInfoEmbed = new MessageEmbed()
    .setColor('#d9095a')
    .setTitle('Commands')
    .setAuthor('Cohesion bot 🤖')
    .addFields({ name: '>wrd', value: ' >wrd [[any word]] ' })
    .addFields(
      { name: '>react',
        value: ' >react1 [[some react message]] ``` 👍 👎 ```\n '
          + '>react2 [[some react message]] ``` 🍎 🍊 🍇 ```\n'
          + '>react3 [[some react message]] ``` 🟢 🟡 🔴 ```\n' },
    );

  return userInfoEmbed;
}
