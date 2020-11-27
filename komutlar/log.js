const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client,message,args) => {
  let durum = args[0];
  if(!durum) return message.channel.send('Bir durum belirt; `aç`/`kapat`')
  if(durum =='aç') {
   db.set(`log_${message.guild.id}`,`Açık`)
    message.channel.send(`Sistem Başarıyla Aktif Edildi!`)
};
if(durum == 'kapat') {
   db.delete(`log_${message.guild.id}`);
  await message.channel.send(`Sistem Başarıyla Deaktif Edildi!`);
 }
}

exports.help = {
  name: "ayarla",
};