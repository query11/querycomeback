const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first()
  if (!message.member.roles.has('734904074272506028')) return message.channel.send('Bu Komutu Kullanamazsın')     
  var role = message.guild.roles.find(role => role.id === "776469743334981673"); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let emb = new Discord.RichEmbed()
  .setTitle('●▬▬▬▬▬▬▬▬▬  ۵  Jau Land  ۵  ▬▬▬▬▬▬▬▬▬●')
  .setDescription(`
  <a:jke:751558669585612830> \`Altyapı Verme Botu Altyapısının Rollerini Aldın\`
  <a:jke:751558669585612830> \`Altyapıyı Alacağın Kanal\` <#776469823991054356>
 [<a:jke:751558669585612830> \`Video Linki\`](https://youtube.com)`)
  .setImage('https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif')
  kullanıcı.send(emb)
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Altyapı Botu Rolü Başarıyla Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\`  Altyapı Botu Rolü Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  message.channel.send(embed);
   client.channels.get('770985262415085568').send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'altyapı',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};
