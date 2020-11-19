const Discord = require('discord.js')
exports.run = async (client, message, member) => {
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  const tag = "・"
  message.guild.members.setNickname(`${tag} `)
  message.channel.send("Herkese Ototag verilmiştir.")

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-ver'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
    description: 'Herkeze Rol verir',
    usage: 'herkese-rol-ver @rol'
}
