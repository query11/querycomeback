const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first()
    let yetkililer = ['298684780034392066']
    let yetkili = message.guild.roles.find(role => role.id === "768058118482427904")
    if(!message.author.roles.has == yetkili.id) return
  var role = message.guild.roles.find(role => role.id === "768058118482427904"); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Müzik Altyapı Rolü Başarıyla Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['music'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};
