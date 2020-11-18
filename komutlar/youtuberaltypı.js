const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first()
 if (!message.member.roles.has('734904074272506028')) return message.channel.send('Bu Komutu Kullanamazsın')
  var role = message.guild.roles.find(role => role.id === "768058118390808606"); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let emb = new Discord.RichEmbed()
  .setTitle('●▬▬▬▬▬▬▬▬▬  ۵  Jau Land  ۵  ▬▬▬▬▬▬▬▬▬●')
  .setDescription(`
  <a:jke:751558669585612830> \`Youtuber Botu Altyapısının Rollerini Aldın\`
  <a:jke:751558669585612830> \`Altyapıyı Alacağın Kanal\` <#776469823991054356>
 [<a:jke:751558669585612830> \`Video Linki\`](https://youtube.com)`)
  .setImage('https://i.pinimg.com/originals/0a/6d/56/0a6d56bdc0bc7b17a08ede9280ceee04.gif')
  kullanıcı.send(emb)
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Youtuber Altyapı Rolü Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Public Altyapı Rolü Başarıyla Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  message.channel.send(embed);
    client.channels.get('770985262415085568').send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yt'],
  permLevel: 0
};

exports.help = {
  name: 'youtuber',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};
