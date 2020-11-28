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
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL())
   .setDescription(`
   ・ **İsim & ID** | \`[${message.guild.name}] + [${message.guild.id}] \` 
   ・ **Kanallar**  | <:voicee:782319132091482123>**Sesli =** **\`[${message.guild.channels.cache.filter(c => c.type === "voice").size}]\`** | <:textt:782319115338776587>**Yazı =** **\`[${message.guild.channels.cache.filter(c => c.type === "text").size}]\`** | **Toplam =** **\`[${message.guild.channels.cache.size}]\`** 
   ・ **Toplam Üye** | \`[${message.guild.memberCount}]\``)
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