const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  const çalışma = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor("ᴊᴀᴜ ", client.user.avatarURL())
  .setThumbnail('  ')
  .setImage('https://cdn.discordapp.com/attachments/620989964104237077/781817709653393458/ezgif-4-76d567677887.gif')
  .setDescription(`
 ・ **ꜰᴏᴜɴᴅᴇʀ ᴏꜰ ᴊᴀᴜ  | ** <@!478466612803141645>
 ・ **ᴏɴʟɪɴᴇ ꜱɪɴᴄᴇ |** \`${çalışma}\`
 ・ **ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ ᴏꜰ ᴊᴀᴜ |** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
 ・ **ᴛᴏᴛᴀʟ ɢᴜɪʟᴅꜱ ᴏꜰ ᴊᴀᴜ |** \`${client.guilds.cache.size.toLocaleString()}\`
 ・ **ᴘɪɴɢ | ** \`${client.ws.ping}ms\`
  
 ・ \`ᴅɪꜱᴄᴏʀᴅ.ᴊꜱ ᴠᴇʀꜱɪᴏɴ | ${Discord.version}\`
 ・ \`ɴᴏᴅᴇ.ᴊꜱ ᴠᴇʀꜱɪᴏɴ | ${process.version}\`
  
  » [\`[ʙᴏᴛ ᴅᴀᴠᴇᴛ]\`](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
`)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};