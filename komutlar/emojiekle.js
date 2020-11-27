const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (stark, msg, args) => {
     let emoji_isim = args[0]
     let emoji_url = args[1]
if(emoji_isim) {
  if (msg.attachments.size > 0) emoji_url = msg.attachments.first().url
  if(!emoji_url) return msg.reply("Emoji dosyasını yükleyin ya da bağlantısını gönderin.\n Yada sadece `"+ayarlar.prefix+"emojio` yazıp bekleyin.")
     msg.guild.emojis.create(emoji_url, emoji_isim)
     .then(emoji => {
        return msg.channel.send(`\`${emoji.name}\`(${emoji}) adlı emoji başarıyla oluşturuldu`)
     })
     
}
if(!emoji_isim) {
  await msg.channel.send(` Emojiye koyulacak adı yazın. \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let a1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!a1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let a = a1.first()
  if (a.content == 'iptal') return msg.channel.send('İşlem iptal edildi.')
  let isim = a.content

  await msg.channel.send(`Emoji dosyasını yükleyin ya da bağlantısını gönderin. \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let b1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!b1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let b = b1.first()
  let url
  if (b.content.length > 0) url = b.content
  else if (b.attachments.first()) url = b.attachments.first().proxyURL
  else return msg.channel.send("Kafam karıştı. Embed falan mı atıyorsun?")
  
  
  await msg.guild.emojis.create(url, isim)
     .then(emoji => {
        return msg.channel.send(`\`${emoji.name}\`(<:${emoji.name}:${emoji.id}>) adlı emoji başarıyla oluşturuldu`)
     }).catch((err) => {
    let em = new Discord.MessageEmbed()
    .setDescription(`
                 **Bir hata oluştu.**
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    \`${err}\`
    `)
         msg.channel.send(em)
       })
  console.log(b.attachments)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: 'emojio',
    description: 'RaknaX',
    usage: 'STARK'
}

