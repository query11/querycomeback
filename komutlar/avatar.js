const Discord = require('discord.js');
const ms = require('ms');
exports.run = async(client, message, args) => {

    let embed = new Discord.MessageEmbed()
    
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avtr'],
  permLevel: 0
};

exports.help = { 
  name: 'avatar', 
  description: 'Avatar gösteriyor falan',
  usage: 'avatar <@&734530137483247687>/id/isim',
  kategori: 'kullanıcı'
};