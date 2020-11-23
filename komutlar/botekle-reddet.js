const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
  let yetkili = message.author;
  let botisim = args[1]
  let sahip = args[0]
  let sebep = args.slice(2).join(" ")
  let log = ayarlar.log;

  let yetkiliROL = ayarlar.yetkiliROL;
  if (!message.member.roles.has(yetkiliROL)) return;
  let embed2 = new Discord.RichEmbed()
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

  let embed = new Discord.RichEmbed()
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

  if (!botisim)
    return message.channel
      .send(`Onaylanacak botun ID'sini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sebep)
    return message.channel
      .send(`Botu neden reddettiğini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply("Reddedilecek botun sahibinin ID'sini belirtmelisin.");
  message.delete();
  client.channels.get('780571429275697173').send(embed).hen(m => m.react('💪'))
  client.users.get(sahip).send(embed2);
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
