import { createChannel } from '../create-channel';

require('dotenv').config();

const channelAliases = ['wrd', 'image', 'gif'];
const channel = createChannel(process.env.ONROP_CHANNEL_ID, channelAliases);

export const onropChannel = { ...channel };
