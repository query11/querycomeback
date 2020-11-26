const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
  let yetkili = message.author;
   let yetkiliROL = ayarlar.yetkiliROL;
  let botisim = args[1]
  let sahip = args[0]
  let sebep = args.slice(2).join(" ") || 'Belirtilmemiş' 
  let log = ayarlar.log;
  let hata1 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 01
   
   \`Bu komutu sadece <@&${yetkiliROL}> rolüne sahip olanlar kullanabilir.\`
`)
    let hata2 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 02
   
   \`Reddedeceğin botun sahibinin ID'sini belirt.\`
`)
       let hata3 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 03
   
   \`Reddedeceğin botun ID'sini belirt.\`
`)
       

  if (!message.member.roles.cache.has(yetkiliROL)) return message.channel.send(hata1)
    if(!sahip) return message.channel.send(hata2)
  if(!botisim) return message.channel.send(hata3)
  let embed2 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `
    <:tr:780484679227932704> » **Maalesef, <@!${botisim}> adlı botun reddedildi.** 
    <:en:780485586535448616> » **Unfortunately, your bot <@!${botisim}> has declined.** 
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    <:tr:780484679227932704> » Sebep : ** ${sebep} **
    <:en:780485586535448616> » Reason : ** ${sebep} **

    <:tr:780484679227932704> » Yetkili | <:en:780485586535448616> Admin ** ${message.author} **
`);

  let embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `  
      <:tr:780484679227932704> **Bir bot reddedildi** | <:en:780485586535448616>**A bot declined**
      
      <:tr:780484679227932704> **» Sahip Bilgisi |** <:en:780485586535448616> **Owner Info  [${message.author}] \`[ ${message.author.id} ]\`**
     ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
      **  <:tr:780484679227932704> » Bot Bilgisi | <:en:780485586535448616> Bot's Info [ <@!${botisim}>] \`[ ${botisim} ]\`**
      **  <:tr:780484679227932704> » Red Sebebi | <:en:780485586535448616> Reason \`[ ${sebep} ]\`**
`
    );

  message.delete();
  client.channels.cache.get(ayarlar.redLOG).send(embed)
  client.users.cache.get(sahip).send(embed2);
  db.add(`sıra_${message.guild.id}`,-1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["red", "reddet"],
  permLevel: 0
};

exports.help = {
  name: "botreddet",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};
