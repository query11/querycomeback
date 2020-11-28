const Discord = require('discord.js')
const ms = require('ms')
exports.run = async(client, message, args) => {
 let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-unmute [kullanıcı]\``)
   .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun.')
let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let time = args[1]
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `**Bu komutu sadece** \`"MANAGE_ROLES"\` **yetkisine sahip kişiler kullanabilir.**`
      )
    ).then(m => m.delete({timeout : '5000'}))
if(!üye) return message.channel.send(üyeHATA)
  let role2 = message.guild.roles.cache.find(x => x.name === 'Susturulmuş')
  if(!üye.roles.cache.has(role2.id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${üye} **adlı kullanıcı zaten sunucuda susturulmamış.**`))
  await üye.roles.remove(role2) 
  message.channel.send(new Discord.MessageEmbed().setDescription(`${üye} adlı kullanıcının başarıyla susturması açıldı.`)).then()
  
}




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['susturaç'],
  permLevel: 0
};

exports.help = { 
    name: 'unmute'
};