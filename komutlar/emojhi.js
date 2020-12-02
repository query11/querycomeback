
const Discord = require('discord.js');
exports.run = (client, message, args) => {  
  if(!message.length > 1990) {
  const emojiList =  message.guild.emojis.cache.map(e=>e.toString()).join(" **-** ")
  let emoji = new Discord.MessageEmbed()
  .setDescription(emojiList)
  message.channel.send(emoji)
  //message.channel.send(emojiList)
  } else {
    message.channel.send('Sunucunuzda çok fazla emoji olduğu için emojiler sıralanamadı')
  }
    
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'emojiler',
  description: 'Sunucudaki Tüm Emojileri Gösterir.',
  usage: 'emojiler'
}
