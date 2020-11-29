const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let abone = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!abone) return message.channel.send('Vip alacağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.cache.find(role => role.id === rol); 
  abone.roles.remove(role);
  let embed = new Discord.MessageEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Vip Rolü Başarıyla Alındı \`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-al'],
  permLevel: 0
};

exports.help = {
  name: 'vipal'
};
//splashen