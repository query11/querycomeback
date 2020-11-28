const Discord = require('discord.js');

exports.run = async(client, message) => {
  var espri = Math.floor(Math.random() * 100)
  let e = new Discord.MessageEmbed()
  .setDescription(`**●▬▬▬▬▬▬▬▬▬▬▬▬▬ SUNUCU REKLAMI ÖRNEĞİ  ▬▬▬▬▬▬▬▬▬▬▬▬▬●** 
  \`\`\`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot List ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    🎁・Sunucumuza gelerek botunu hızlıca büyütebilirsin.
    🎁・7/24 Aktif ekibimiz ile botlarınız hızlıca onaylanır. 
    🎁・Sunucumuzda kod paylaşımları da yapılmaktadır.
    🎁・Discord Linkimiz : discord.gg/BURAYADİSCORDDAVETLİNK 
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot List ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  \`\`\`

Bot Reklam Örneği ;

**Jau Bot **

**- 7/24 Aktif **

**-Moderasyon Guard Eğlence Müzik Otorol gibi komutların bulunduğu bir bottur.**

**- Sunucunuzdaki tüm işlemleri tek bir bottan halledebilmek için Jau Bot'u ekleyin.**

**-Davet Linki :  [LİNK]**`)
  message.channel.send(e)
    
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatının Büyüklüğünü Söyler.',
  usage: 'kaçcm',
  kategori: 'eğlence'
};

