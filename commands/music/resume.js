const { Message, Client } = require("discord.js");
const player = require('../../client/player');

module.exports = {
    name: "resume",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      const queue = player.getQueue(message.guild.id);
      if(!queue?.playing) return message.reply({ content: `${client.config.error} | Nothing is playing right now.` })
      queue.setPaused(false);
      return message.reply({content: `⏯️ | Queue Resumed.`});
    },
};
