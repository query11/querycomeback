const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
  

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
  let d = new Discord.MessageEmbed()
 .setAuthor(`${message.author.tag}`,message.author.avatarURL())
.setColor('RED')
.setDescription(`

・Kanalın kilidi ${message.author} tarafından açıldı.
`)
.setThumbnail('https://cdn.discordapp.com/attachments/620989964104237077/781780517057200138/Screenshot_2-removebg-preview_2.png')
  .setFooter('・Açılma Saati')
  .setTimestamp()
  channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Kilidi açan '+message.author.tag);
channel.send(d)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'kilitaç'
};//