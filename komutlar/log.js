const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client,message,args) => {
  let kanal = message.mentions.channels.first || message.guild.channels.cache.get(args[0])
  
  if(!kanal) return message.channel.send('Bir kanal belirt')
  
   db.set(`log_${message.guild.id}`)
    message.channel.send(`Sistem Başarıyla Aktif Edildi!`)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'log'
};//