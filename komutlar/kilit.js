const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bu komutu sadece** \`"MANAGE_CHANNELS"\` **yetkisine sahip kişiler kullanabilir.**`))

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};
let reasonn;
if(!reason) reasonn = '. Sebep belirtilmemiş.';
if(reason) reasonn = ` for ${reason} reason.`;

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitleyen '+message.author.tag);
  let d = new Discord.MessageEmbed()
 .setAuthor(`${message.author.tag}`,message.author.avatarURL())
.setColor('RED')
.setDescription(`

・<#${channel.id}> kanalı ${message.author} tarafından kilitlenmiştir.
`)
.setThumbnail('https://cdn.discordapp.com/attachments/620989964104237077/781780517057200138/Screenshot_2-removebg-preview_2.png')
  .setFooter('・Kilitleme Saati')
  .setTimestamp()
channel.send(d)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = { 
	name: 'kilit', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}