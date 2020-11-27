const Discord = require('discord.js');


exports.run = function(client, message, embed, params) {
  const bymayfe = new Discord.MessageEmbed()

  .setColor('RED')
  .setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+client.ws.ping+'MS')
  .setTitle('・ BOTUN PİNGİ AŞAĞIDA VERİLMİŞTİR ・')
  .set

    message.channel.send(bymayfe);

};   
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};