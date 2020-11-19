const Discord = require('discord.js')
exports.run = async (client, message, member) => {
    
let bot = message.guild.members.filter(a => a.bot.users).size

let splashen = new Discord.RichEmbed()
.setDescription(`
Sunucudaki Bot Sayısı : ${bot}
Sunucudaki Üye Sayısı : ${message.guild.members.size}
`)
message.channel.send(splashen)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'say'
}
