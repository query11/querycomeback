const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  const yardım = new Discord.MessageEmbed()
  .setDescription(`
  **Moderasyon Komutları**
  \`-ban\` | \`-unban\` | \`-kick\` |  \`-kilit\` |  \`-kilitaç\` | \`-uyar\` | 
  
  **Kullanıcı Komutları**
   \`-avatar\` |  \`-yardım\` |  \`-istatistik\` |  \`-ping\` |  \`-hakkında\` | 
  
  `)
  message.channel.send(yardım)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım',
  açıklama : 'Botun yardım komutlarını gösterir.'
};//