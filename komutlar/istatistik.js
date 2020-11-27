const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const çalışma = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor("Jau", client.user.avatarURL())
  .setDescription(`
  » **Founder | ** <@!478466612803141645>
  » **Mesaj Gecikmesi | ** \`${client.ws.ping}ms\`
  » **RAM |** \`${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2)}MB\`
  » **Çalışma süresi |** \`${çalışma}\`
  » **Total Kullanıcı |** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
  » **Total Sunucu |** \`${client.guilds.cache.size.toLocaleString()}\`
  » **Discord.js Sürümü |** \`${Discord.version}\`
  » **Discord.js Sürümü |** \`${process.version}\`
  
  **» Bot Davet** [Davet Et](https://discordapp.com/oauth2/authorize?client_id= + ${client.user.id} + &scope=bot&permissions=8)
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