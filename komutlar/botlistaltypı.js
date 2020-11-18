const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first()
  if (!message.member.roles.has('734904074272506028')) return message.channel.send('Bu Komutu Kullanamazsın')     
  var role = message.guild.roles.find(role => role.id === "767619251808763914"); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let emb = new Discord.RichEmbed()
  .setTitle('●▬▬▬▬▬▬▬▬▬  ۵  Jau Land  ۵  ▬▬▬▬▬▬▬▬▬●')
  .setDescription(`
  <a:jke:751558669585612830> \`Botlist Botu Altyapısının Rollerini Aldın\`
  <a:jke:751558669585612830> \`Altyapıyı Alacağın Kanal\` <#776469823991054356>
 [<a:jke:751558669585612830> \`Video Linki\`](https://www.youtube.com/watch?v=sk3dcll5mWo&t=2s)`)
  .setImage('https://i.pinimg.com/originals/0a/6d/56/0a6d56bdc0bc7b17a08ede9280ceee04.gif')
  kullanıcı.send(emb)
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Bot List Altyapı Rolü Başarıyla Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Bot List Altyapı Rolü Verildi \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}

<a:jke:751558669585612830> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  message.channel.send(embed);
   client.channels.get('770985262415085568').send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botlistaltyapı'],
  permLevel: 0
};

exports.help = {
  name: 'botlist',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};
