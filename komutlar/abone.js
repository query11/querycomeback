const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let log = ayarlar.rolLOG
  let kullanıcı = message.mentions.members.first()
 
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu sadece yetkililer kullanabilir').then(mesaj => mesaj.delete(3000))  
  var role = message.guild.roles.find(role => role.id === '761223163988017173'); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(`• __\`Abone Rolü Başarıyla Verildi\`__`)
  .setDescription(`
 • __**\`Yetkili\`**__ ${message.author}

 • __**\`Kullanıcı\`**__ ${kullanıcı}`)
  .setThumbnail(kullanıcı.user.avatarURL)
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
