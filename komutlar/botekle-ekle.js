const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
 
      let botID = args[0];
  let prefix = args[1];
  let basvuru = ayarlar.basvurulog;
  let eklekanal = ayarlar.eklekanal;
  let log = ayarlar.log;

  if (message.channel.id !== eklekanal)
    return message.channel
      .send(`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == eklekanal) {
    if (!botID)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete(10000));
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
   <a:onayred:780481839147384912> **__Bir Bot Başvurusu Gönderildi__** | **__There is an application__** <a:onayred:780481839147384912> 

    **» Sahip Bilgileri | Owner Information :** [ ${message.author} ] \`[ ${message.author.id} ]\`
   ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    **» Bot Bilgileri | Bot's Information :** [ <@!${botID}> ] \`[ ${botID} ]\`
    **» Bot Prefix :**  \`[ ${prefix} ]\`

                                                      `);
    client.channels.get('780476233040396308').send(embed2);

    message.channel.send(`<a:tik4:756946179530424541>__**Bot ekleme isteğiniz alındı.**__`).then(msg => msg.delete(3000));
    db.set(`sahip_${message.author.id}`, botID)
}
 


     

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
