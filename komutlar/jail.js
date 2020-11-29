const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let jailli = message.mentions.members.first()
  let sebep = args.slice(1).join(' ') || 'Belirtilmemiş'
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')
   if(!jailli) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  if(!sebep) return message.channel.send('Jail sebebini belirtmelisin.')
  
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  jailli.roles.add(rol);
  
  let embed2 = new Discord.MessageEmbed()
  .setThumbnail(jailli.user.avatarURL())
  .setDescription(`
  
●▬▬▬▬▬▬ <a:tik4:756946179530424541> **Kullanıcı Jaile Atıldı** <a:tik4:756946179530424541> ▬▬▬▬▬▬▬●

 • Yetkili • ${message.author}
 • Kullanıcı • ${jailli} 
 • Jaile Atılma Sebebi •** ${sebep}**

●▬▬▬▬▬▬ <a:tik4:756946179530424541> **Kullanıcı Jaile Atıldı** <a:tik4:756946179530424541> ▬▬▬▬▬▬▬●
`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\`Kullanıcı Başarıyla Jaile Atıldı\`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\`Yetkili\`**__ ${message.author}`)
  message.channel.send(embed).then(m => m.delete({timeout : '4000'}))
  client.channels.cache.get(ayarlar.jailLOG).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-ver'],
  permLevel: 0
};

exports.help = {
  name: 'jail'
};
//splashen