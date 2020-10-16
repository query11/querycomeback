const Discord = require('discord.js');

exports.run = function(client, message, args) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  const rol = '735955601074421770'
  const kullanıcı = message.mentions.members.first(  )
  const aboneROL = message.guild.roles.find(role => role.id === '735955601074421770'); 
  kullanıcı.addRole(aboneROL)
  message.channel.send(`Abone rolü başarıyla verildi`);
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
//codare
