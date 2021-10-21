export function createChannel(channelId: string, aliases: string[]) {
  return {
    channel_id: channelId,
    aliases,
  };
}
