import { createChannel } from '../create-channel';

require('dotenv').config();

const aliases = ['wrd'];

export const onropChannel = createChannel(process.env.ONROP_CHANNEL_ID, aliases);
