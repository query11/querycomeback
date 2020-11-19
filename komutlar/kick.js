const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = (client, message, args) => {
  let emoji = client.emojis.get('740278075261976628')
let ayarlar = require('../ayarlar.json')
const db = require('quick.db')
 let cezalar = db.fetch(`ceza_${message.guild.id}`)
  let uye = args[0] || message.mentions.members.first()
  let sebep = args[1] || 'Belirtilmemiş' 
  let log = ayarlar.penalties
  if(!uye) return message.channel.send('Sunucudan yasaklanacak bir üye belirtmelisin.')
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmaya yetkin yok.')
  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  member.kick(uye)
  let embed = new Discord.RichEmbed()
  .setTitle(` ${emoji} Bir Üye Sunucudan Atıldı ${emoji} `)
  .setDescription(`
  • Atılan Üye ${uye} 
  • Atan Yetkili ${message.author}
  • Atılm Sebebi \`${sebep}\`
  `)
  .setTimestamp()
  .setFooter('Atılma Tarihi')
  client.channels.get(log).send(embed)
  let emob = new Discord.RichEmbed()
  .setDescription(`${emoji} **Kullanıcı başarıyla sunucudan atıldı <#${log}> kanalından detaylarına ulaşabilirsiniz.**`)
  message.channel.send(emob).then(msg => msg.delete(6003))
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['at'],
  permLevel: 0
};

exports.help = {
  name: 'kickle'
};
//splashen