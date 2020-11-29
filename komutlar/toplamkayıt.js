const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {//splashen
  let kişi = message.mentions.users.first() || message.author
let erkek = db.fetch(`erkek_${kişi.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${kişi.id}_${message.guild.id}`) || 0
let toplam = erkek+kız
var embed = new Discord.MessageEmbed()
.setDescription(`
●▬▬▬▬▬ <a:pembeh:751553654561046619>**Kayıt Bilgileri** <a:pembeh:751553654561046619> ▬▬▬▬▬●

                • Yetkili ${kişi}
                • Toplam Üye Kayıt Sayısı  **${toplam}**
                • Toplam Erkek Kayıt Sayısı **${erkek}**
                • Toplam Kadın Kayıt Sayısı **${kız}**
               

●▬▬▬▬▬ <a:pembeh:751553654561046619> **Kayıt Bilgileri** <a:pembeh:751553654561046619> ▬▬▬▬▬●




`)
.setThumbnail(kişi.avatarURL())
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};//splashen