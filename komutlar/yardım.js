const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
  
  const yardım = new Discord.MessageEmbed()
  .setDescription(`
  **Moderasyon Komutları**
  \`-ban\` | \`-unban\` | \`-kick\` |  \`-kilit\` |  \`-kilitaç\` 
  
  **
  
  
  
  `)
  message.channel.send(yardım)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım'
};//