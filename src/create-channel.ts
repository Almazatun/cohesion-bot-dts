interface Channel {
  channelId: string
  aliases: string[]
}

export function createChannel(channelId: string, aliases: string[]): Channel {
  return {
    channelId,
    aliases,
  };
}
