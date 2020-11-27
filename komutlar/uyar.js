const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
 if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  
  
  
  
  
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn'],
permLevel: 0,
}
exports.help = {
  name:"uyarı"
}