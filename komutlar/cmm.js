const Discord = require('discord.js');

exports.run = async(client, message) => {
  var espri = Math.floor(Math.random() * 100)
  message.channel.send(``)
    
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatının Büyüklüğünü Söyler.',
  usage: 'kaçcm',
  kategori: 'eğlence'
};

