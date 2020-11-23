const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
  let yetkiliROL = ayarlar.yetkiliROL;
  if (!message.member.roles.has(yetkiliROL)) return;
  let yetkili = message.author;
  let sahip = message.guild.members.get(args[0]);
   let sahip2 = args[0];
  let botisim = message.guild.members.get(args[1]);
  let botisim2 = args[1];
  let prefix = args[2];
  let isim = client.users.get(args[1]).username;
  let log = ayarlar.log;
  let rol = ayarlar.developerROL;
  let b = ayarlar.botROL;

  if (!botisim)
    return message.channel
      .send(`Onaylanacak botun ID'sini girmen gerekiyor.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply(
      "Onaylanacak botun sahibinin ID'sini girmen gerekiyor."
    );
  if (!prefix) return message.reply("Onaylanacak botun prefixini yazmalısın.");
  message.delete();
  sahip.addRole(rol);
  message.guild.members.get(botisim2).setNickname(` [${prefix}] ` + `${isim}`);
  botisim.addRole(b);
 
  
  let embedd = new Discord.RichEmbed()
  .setColor('#71ea00')
  .setDescription(`
    <:tr:780484679227932704> » **Tebrikler, ${botisim} adlı botun başarıyla onaylandı.** 
    <:en:780485586535448616> » **Congratulations, your bot ${botisim} has been successfully approved.** 
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
  `)
  .setFooter('» Onaylandığı Zaman ')
  .setTimestamp()
  sahip.send(embedd);
  let embed2 = new Discord.RichEmbed()
    .setColor("#71ea00")
    .setDescription(`

       <:tr:780484679227932704> **Bir bot onaylandı** | <:en:780485586535448616>**A bot approved**
      
       <:tr:780484679227932704> **» Sahip Bilgisi |** <:en:780485586535448616> **Owner Info  [${message.author}] \`[ ${message.author.id} ]\`**
        ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
      **  <:tr:780484679227932704> » Bot Bilgisi | <:en:780485586535448616> Bot's Info [${botisim}] \`[ ${botisim2} ]\`**
      **  <:tr:780484679227932704> » Bot Prefix | <:en:780485586535448616> Bot's Prefix \`[ ${prefix} ]\`**

    `)
  
  client.channels.get('780571384538857524').send(embed2).then(m => m.react('💪'))
  db.add(`sıra_${message.guild.id}`,-1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-onayla", "onayla"],
  permLevel: 0
};

exports.help = {
  name: "botonayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};
