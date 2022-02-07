import { MessageEmbed } from 'discord.js';

import { VCRUData } from '../helpers/vcru/vcru-parser';

export function vcruEmbed(vcruData: VCRUData): MessageEmbed {
  const vcruNewsEmbed = new MessageEmbed()
    .setColor('#ba2bb8')
    .setTitle(`VC.RU TOP NEWS | Date --> ${vcruData.time}`)
    .setAuthor('Cohesion bot 🤖');

  if (vcruData.newsContent.length > 0) {
    for (const content of vcruData.newsContent) {
      vcruNewsEmbed.addField(`${content.title}`, `[Click here](${content.link})`);
    }
  }

  return vcruNewsEmbed;
}
