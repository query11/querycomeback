const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = (client, message, args) => {
  let emoji = client.emojis.get('740278075261976628')
let ayarlar = require('../ayarlar.json')
  let uye = args[0]
 
  let uye2 = client.users.get(uye) || 'Gösterilemiyor'
  let sebep = 'Belirtilmemiş' ||args[1]
  let banlımı = message.guild.fetchBans();
  let log = ayarlar.penalties
  if(!uye) return message.channel.send('Yasağı kaldırılacak bir üye etiketlemelisin.')
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmaya yetkin yok.')
  if (!uye.id === banlımı) return message.channel.send('Kullanıcı sunucudan yasaklanmamış.')
  message.guild.unban(uye)
  let embed = new Discord.RichEmbed()
  .setTitle(` ${emoji} Bir Üyenin Yasağı Kaldırıldı ${emoji} `)
  .setDescription(`
  • Yasağı Kaldırılan Üye <@!${uye}> \`{ ${uye} }\`
  • Yasağı Kaldıran Yetkili ${message.author} \`{ ${message.author.id} }\`
  • Yasağı Kaldırma Sebebi \`${sebep}\`
  `)
  .setTimestamp()
  .setFooter('Kaldırılma Tarihi')
  client.channels.get(log).send(embed)
   let emob = new Discord.RichEmbed()
  .setDescription(`${emoji} **Kullanıcının yasağı başarıyla kaldırıldı <#${log}> kanalından detaylarına ulaşabilirsiniz.**`).then(m => m.delete(100))
  message.channel.send(emob).then(msg => msg.delete(6003))
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banaç'],
  permLevel: 0
};

exports.help = {
  name: 'unban'
};
//splashen