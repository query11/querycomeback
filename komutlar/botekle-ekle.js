const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
 const DBL = require('dblapi.js')
const dbl = new DBL('TOKEN', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {



       let botID = args[0];
  let prefix = args[1];
  let basvuru = ayarlar.basvurulog;
  let eklekanal = ayarlar.eklekanal;
  let log = ayarlar.log;
  let sıra = db.fetch(`sıra_${message.guild.id}`)

  if (message.channel.id !== eklekanal)
    return message.channel
      .send(`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == eklekanal) {
    if (!botID)
      return 
    if (!prefix)
      return 
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setDescription(
        `[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=0) | ` + ` | [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8)`,true)
      .setTitle("<a:jke:754772326704218112> Bot Başvurusu ")
      .addField(
        "<a:jke:754772326704218112> Bot Sahibi",`<@${message.author.id}>`)
      .addField("<a:jke:754772326704218112> Bot ID", botID)
      .addField("<a:jke:754772326704218112> Bot Prefix", prefix);
     //   client.channels.get(basvuru).send(embed);
    let bott = client.users.get(botID)
    let embed2 = new Discord.RichEmbed()
    .setDescription(`
    <:tr:780484679227932704>**Bir bot başvurusu gönderildi** | <:en:780485586535448616>**A bot application has been submitted** 

    <:en:780485586535448616>  » [ ${message.author} ] 's bot [ <@!${botID}> ] has been added to queue.

    <:tr:780484679227932704>  » [ ${message.author} ] adlı kullanıcının botu [ <@!${botID}> ] sıraya eklendi.
    
     
    » <:tr:780484679227932704> **Sahip Bilgisi |** <:en:780485586535448616> **Owner Info  [${message.author}] \`[ ${message.author.id} ]\`**
   ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
   ** » <:tr:780484679227932704> Bot Bilgisi | <:en:780485586535448616> Bot's Info [<@!${botID}>] \`[ ${botID} ]\`**
   ** » <:tr:780484679227932704> Bot Prefix | <:en:780485586535448616> Bot's Prefix \`[ ${prefix} ]\`**
    
   **» <:tr:780484679227932704> Sıra | <:en:780485586535448616> Queue  [⤙ ${sıra} ⤚](https://www.youtube.com/channel/UCDf5rQLAZOfi6NV7on2S_AA/featured)**                                           `)
    
    client.channels.get('780476233040396308').send(embed2);
    let emba = new Discord.RichEmbed()
    .setDescription(`
    <:tr:780484679227932704>**Botunuz başarıyla sıraya eklendi,en yakın zamanda test edilecektir** 
    <:en:780485586535448616>**Your bot has been successfully queued,will be checked as soon as possible** 
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    <:en:780485586535448616>  » [ ${message.author} ] 's bot [ <@!${botID}> ] has been added to queue.
    <:tr:780484679227932704>  » [ ${message.author} ] adlı kullanıcının botu [ <@!${botID}> ] sıraya eklendi.

   **<:tr:780484679227932704> » Sıra | <:en:780485586535448616> Queue  [⤙ ${sıra} ⤚](https://www.youtube.com/channel/UCDf5rQLAZOfi6NV7on2S_AA/featured)**  `)
    message.author.send(emba)
    db.set(`sahip_${message.author.id}`, botID)
    db.add(`sıra_${message.guild.id}`,1)
}
 
 


     } else {
        message.channel.send("Bu komutu kullanabilmek için 12 saatte bir https://discordbots.org/bot/BOTUNID/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.")
      }
  })
    


     

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["add"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
