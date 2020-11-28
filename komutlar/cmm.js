const Discord = require('discord.js');

exports.run = async(client, message) => {
  var espri = Math.floor(Math.random() * 100)
  let e = new Discord.MessageEmbed()
  .setDescription(`
  📢・Bu tarz reklamlar yaptırmak için sunucuyu boostlayıp <@!478466612803141645>e ulaşın.
  🔔・Şu anda yapılan boostlar için geçerli değildir.Yeni boost yapmanız gerekir.
  🔐・**BOOST BİTTİĞİNDE | ÇEKİLDİĞİNDE REKLAM SİLİNİR**
  
  
  **●▬▬▬▬▬▬▬▬▬▬▬ SUNUCU REKLAMI ÖRNEĞİ ▬▬▬▬▬▬▬▬▬▬▬▬●** 
  \`\`\`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot List ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    🎁・Sunucumuza gelerek botunu hızlıca büyütebilirsin.
    🎁・7/24 Aktif ekibimiz ile botlarınız hızlıca onaylanır. 
    🎁・Sunucumuzda kod paylaşımları da yapılmaktadır.
    🎁・Discord Linkimiz : discord.gg/BURAYADİSCORDDAVETLİNK 
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot List ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  \`\`\`

**●▬▬▬▬▬▬▬▬▬▬▬ BOT REKLAMI ÖRNEĞİ ▬▬▬▬▬▬▬▬▬▬▬▬●** 

\`\`\`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    🎁・7/24 Aktif.
    🎁・Moderasyon Guard Eğlence Müzik gibi komutları bulunur
    🎁・Tüm işlemlerinizi bir bottan yapmak için Jau'yu ekleyin.
    🎁・Bir problem yaşarsanız destek sunucumuza gelebilirsiniz.
    🎁・Komutları görmek için !yardım yazabilirsiniz.
    🎁・Davet Linki : [BURAYA BOT DAVET LİNKİNİZ] 
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ۵ Jau Bot ۵ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  \`\`\`
  `)
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

