const Discord = require('discord.js');
 ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (bot, message, params) => {
  const filterLevels = ['Yok', 'Rolü Olmayanlar İçin', 'Herkes İçin']
       const tarih =  message.guild.createdAt

let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }

   const embed = new Discord.MessageEmbed()
   .setColor('#f2f2f2')
   .setAuthor(message.guild.name+'・ Sunucusunun Bilgileri')
   .setThumbnail(message.guild.iconURL())
   .setDescription(`
   ・ **İsim & ID** » \`[ ${message.guild.name} ] + [ ${message.guild.id} ] \` 
   ・ **Sunucu Sahibi** » \`${message.guild.owner.user.username}\` - [ ${message.guild.owner} ] 
   ・ **Kanallar** <:voicee:782319132091482123> **\`[ ${message.guild.channels.cache.filter(c => c.type === "voice").size} ]\`** | <:textt:782319115338776587> **\`[${message.guild.channels.cache.filter(c => c.type === "text").size}]\`** | **Toplam =** **\`[${message.guild.channels.cache.size}]\`** 
   ・ **Toplam Üye** » \`[ ${message.guild.memberCount} ]\`
   ・ **Toplam Rol** » \`[ ${message.guild.roles.cache.size} ]\`
   ・ **Toplam Emoji** » \`[ ${message.guild.emojis.cache.size} ]\`
   ・ **Kuruluş Tarihi** » \`[ ${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}]\`
   
   `)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };
 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
    name: 'sb'
};