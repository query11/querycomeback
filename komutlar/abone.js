const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let abone = message.mentions.members.first()
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  var role = message.guild.roles.find(role => role.id === "758382651907244034"); 
  abone.addRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Abone Rolü Başarıyla Verildi \`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone.js','abone'],
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};
