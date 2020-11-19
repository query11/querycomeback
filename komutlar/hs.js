const Discord = require('discord.js')
exports.run = async (client, message, member) => {
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  message.guild.members.forEach(m => {
    if(m.user.bot) return
    if(m.user.username.includes('・')) return
  m.setNickname('・' + `${m.user.username}`)
    client.channels.get('779032920609652746').send(`${m} Adlı Üyenin İsmi Değişti`)
})
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
