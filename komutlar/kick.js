const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = async (client, message, args) => {
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-kick [kullanıcı] [sebep]\``)
   .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun.')
    
  let guild = message.guild
  let reason = args.slice(1).join(' ') || 'Belirtilmemiş'
  let üye = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!üye) return message.reply(üyeHATA).catch(console.error);
  guild.member(üye).kick({ reason: reason });
  message.channel.send("Kullanıcı başarıyla atıldı.")

 let banEMBED = new Discord.MessageEmbed()
 .setAuthor('Jau','https://cdn.discordapp.com/attachments/620989964104237077/781640684050186280/Screenshot_1-removebg-preview_1.png')
 .setDescription(`
  ・**${üye} kullanıcısı atıldı.**
  ・**Sebep = ** \`${reason}\``)
 .setFooter('・Atılma Saati')
 .setTimestamp()
message.channel.send(banEMBED)
  let log = db.fetch(`log_${message.guild.id}`)
  message.guild.channels.cache.get(log).send('BAŞARILI')
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'kick', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}