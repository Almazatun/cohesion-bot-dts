import { generalSlashCmdBuilder } from './general.slash-cmd-builder';
import { newsSlashCmdBuilder } from './news.slash-cmd-builder';

export const slashCommands = [
  generalSlashCmdBuilder(),
  newsSlashCmdBuilder(),
].map(command => command.toJSON());
