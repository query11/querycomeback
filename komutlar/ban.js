exports.run = async (client, message, args) => { 
const Discord = require('discord.js')

  let üye = args[0]
  let idban = message.guild.members.cache.get(args[0])
  let sebep = args.slice(1).join(" ") || 'Belirtilmemiş'
   let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-ban [kullanıcı] [sebep]\``)
   .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun.')

  
 
  
  if(!üye) return message.channel.send(üyeHATA)
    if(üye) {
let banEMBED = new Discord.MessageEmbed().setDescription(`
  <@!${üye}> kullanıcısı yasaklandı.
  **Sebep = ** ${sebep}`)
      message.guild.members.cache.get(args[0]).ban({reason : `${sebep}`})
      message.channel.send(banEMBED)
    }


};


exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: '3'
};

exports.help = {
  name: 'ban', 
  description: '', 
  usage: ''
};