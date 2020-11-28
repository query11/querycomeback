const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = async (client, message, args) => {
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-ban [kullanıcı] [sebep]\``)
   .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun.')
    
     let üyes = new Discord.MessageEmbed()
      .setAuthor('Jau','https://cdn.discordapp.com/avatars/656531150897938453/560c982e1dbebadfa7ede412a8bc21d5.webp?size=2048')
  .setDescription(`**Kendini yasaklamana izin veremem.**`)
     
     
  let guild = message.guild
  let reason = args.slice(1).join(' ') || 'Belirtilmemiş'
  let üye = message.mentions.members.first()
  if(!üye.bannable) return message.channel.send('Bunu banlayamıyorum')
  if(üye.id = message.author.id) return message.channel.send(üyes)
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bu komutu sadece** \`"BAN_MEMBERS"\` **yetkisine sahip kişiler kullanabilir.**`))
   if (!üye) return message.reply(üyeHATA).catch(console.error);
  guild.members.ban(üye, { reason: reason });
  message.channel.send("Kullanıcı başarıyla banlandı.")
 let banEMBED = new Discord.MessageEmbed()
 .setAuthor('Jau','https://cdn.discordapp.com/avatars/656531150897938453/560c982e1dbebadfa7ede412a8bc21d5.webp?size=2048')
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
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
exports.help = { 
	name: 'ban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}