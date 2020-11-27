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
  ・\`-köpek\` |  \`-\` |  \`-\` |  \`-\` | 
  
  `)
  .setImage('https://cdn.discordapp.com/attachments/620989964104237077/781817709653393458/ezgif-4-76d567677887.gif')
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