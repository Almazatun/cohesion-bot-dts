import { createChannel } from '../create-channel';

require('dotenv').config();

const channelAliases = ['wrd'];
const channel = createChannel(process.env.ONROP_CHANNEL_ID, channelAliases);

export const onropChannel = { ...channel };
