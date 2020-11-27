const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
  const yardım = new Discord.MessageEmbed()
  .setImage
  .setDescription(`
  :white_small_square: **Jau Bot Nedir?**
  
 **Jau Bot sunucunuzdaki tüm moderasyon işlemlerini çok basit komutları ile halledebilir.Sade ve basit arayüzü sayesinde insanlar komutların içine boğulmaz.Yakında onlarca özelliğin ekleneceği Jau Bot şu anda sadece moderasyon işlemleriyle uğraşabiliyor.Takipte kalın!**

 » [\`[ᴅᴇꜱᴛᴇᴋ ꜱᴜɴᴜᴄᴜꜱᴜ]\`](https://discord.gg/YYkYPSU)
 » [\`[ʙᴏᴛ ᴅᴀᴠᴇᴛ]\`](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
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
  name: 'hakkında',
  açıklama : 'Botun yardım komutlarını gösterir.'
};//