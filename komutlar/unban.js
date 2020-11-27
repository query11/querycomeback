const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = async (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-unban [kullanıcı ID]\``)
   .setFooter('Belirtilen üyenin sunucudan yasaklandığından emin olun.')
  
  let guild = message.guild
  let reason = args.slice(1).join(' ') || 'Belirtilmemiş'
  let üye = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!üye) return message.reply(üyeHATA).catch(console.error);
  guild.members.unban(üye)

 let unbanEMBED = new Discord.MessageEmbed()
 .setAuthor('Jau','https://cdn.discordapp.com/attachments/620989964104237077/781640684050186280/Screenshot_1-removebg-preview_1.png')
 .setDescription(`
  ・**${üye} kullanıcısının yasağı kaldırıldı.**`)
 .setFooter('・Kaldırılma Saati')
 .setTimestamp()
message.channel.send(unbanEMBED)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'unban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}