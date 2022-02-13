import { createChannel } from '../helpers/create-channel';

import { Command } from '../common/enums/commands.enum';

require('dotenv').config();

const channelAliases = [Command.WRD, Command.GIF];
const channel = createChannel(process.env.ONROP_CHANNEL_ID, channelAliases);

export const onropChannel = { ...channel };
