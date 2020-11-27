const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  const yardım = new Discord.MessageEmbed()
  .setDescription(`
    :white_small_square: **Jau Bot Yardım Komutları**
  
  __**Moderasyon Komutları**__
  ・\`-ban\` | \`-unban\` | \`-kick\` |  \`-kilit\` |  \`-kilitaç\` | \`-uyar\` | 
  
  __**Kullanıcı Komutları**__
  ・\`-avatar\` |  \`-yardım\` |  \`-istatistik\` |  \`-hakkında\` | 
  
  __**Eğlence Komutları**__
  ・\`-köpek\` |  \`-kedi\` |  \`-\` |  \`-\` | 
  
  `)
  .setImage('https://cdn.discordapp.com/attachments/620989964104237077/781891213779140618/New_Project_1.png')
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