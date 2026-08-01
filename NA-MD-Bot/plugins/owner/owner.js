// ============================================
// NA MD Bot - Owner Info Plugin
// Developer: Nisha Aslam | NA Mods
// ============================================

import config from '../../config.js';
import { db } from '../../lib/database.js';

export default {
  command: 'owner',
  alias: ['developer', 'dev', 'creator'],
  description: 'Show bot owner/developer info',
  category: 'owner',
  usage: '.owner',

  async execute({ reply, sock, jid, msg }) {
    const channelLink = config.channelLink || '';

    const text =
      `╔══════════════════════════╗\n` +
      `║  👑 *NA MD Bot — Owner*  ║\n` +
      `╚══════════════════════════╝\n\n` +
      `👤 *Developer:* ${config.developer}\n` +
      `🏢 *Brand:* ${config.brand}\n` +
      `🤖 *Bot:* ${config.botName} v${config.version}\n\n` +
      `💬 _Contact for support, custom bots & features_\n` +
      (channelLink ? `🌐 *Channel:* ${channelLink}\n` : '') +
      `\n> 🤖 *Powered by NA MD Bot*  👨‍💻 *Nisha Aslam*`;

    await reply(text);
  },
};
