const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   message.guild.members.forEach(u => {
     let e = u.user.username;
     if(u.user.bot) {
       u.setNickname(`・ ${e}`)
       message.channel.send(`${u}`)
     }
     
})
  message.channel.send('OKOK')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-ver'],
    permLevel: 0
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Herkeze Rol verir',
    usage: 'herkese-rol-ver @rol'
}

