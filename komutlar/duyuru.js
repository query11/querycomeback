const Discord = require('discord.js')



exports.run = (client, message, args) => {
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-duyuru [mesaj]\``)
   .setFooter('Komutu kullandığınız kanala duyuru atılır.')
  let yazı = args.slice(0).join(" ")
  if(!yazı) return message.channel.send(üyeHATA)
  let embed = new Discord.MessageEmbed()
  .setTitle(`__ꜱᴜɴᴜᴄᴜ ᴅᴜʏᴜʀᴜꜱᴜʀᴜ__`)
  .setDescription(`
  
  **${yazı}**
  `)
  .setThumbnail('https://cdn.discordapp.com/attachments/620989964104237077/782218265744375868/announcement-icon.png')
  .setTimestamp()
  .setFooter('・Duyuru Saati')
  
  message.channel.send(embed).then(m => m.react('✅'))
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'duyuru'
};