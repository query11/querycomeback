const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = async (client, message, args) => {
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-ban [kullanıcı] [sebep]\``)
   .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun.')
    
  let guild = message.guild
  let reason = args.slice(1).join(' ') || 'Belirtilmemiş'
  let üye = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!üye) return message.reply(üyeHATA).catch(console.error);
  guild.members.ban(üye, { reason: reason });
  message.channel.send("Kullanıcı başarıyla banlandı.")

 let banEMBED = new Discord.MessageEmbed()
 .setAuthor('Jau','https://cdn.discordapp.com/avatars/760535868834054154/2458cdf4da8ee270e23dcbb04ecd568a.webp?size=2048')
 .setDescription(`
  ・**${üye} kullanıcısı yasaklandı.**
  ・**Sebep = ** \`${reason}\`
  
   \`・Banı kaldırmak için : -unban ${üye.id}\` `)
 .setFooter('・Yasaklama Saati')
 .setTimestamp()
message.channel.send(banEMBED)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'ban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}