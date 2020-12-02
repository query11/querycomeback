const { Discord, MessageEmbed} = require('discord.js')

exports.run =  (client, message, args) => {
  
  let mesaj = args.slice(0).join(' ')
  
  let duyuruEMBED = new MessageEmbed()
  .setDescription()
}

exports.conf = {
  
  enabled: true,
  guildOnly:true,
  aliases : [],
  permLevel:0
  
}
  

exports.help = {
  name : 'duyur',
  
}
