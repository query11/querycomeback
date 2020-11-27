const Discord = require('discord.js');
const ms = require('ms');
exports.run = async(client, message, args) => {
    let üye = message.mentions.users.first() || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let embed = new Discord.MessageEmbed()
    .setAuthor("・  " + `\`${message.author.username}\``, message.author.avatarURL())  
    .setImage(üye.avatarURL({ dynamic: true, size: 2048 }))
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