const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .setDescription('<a:tik:740278047890210846> **_Duyurusunu yapacağın metni belirtmen gerek_**')).then(m => m.delete(5000));

    
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("#ffff89")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('Duyuru',client.user.avatarURL())

       .addField(`**📢 Jau | Duyuru **`, `**${question}**`)).then(function(message) {

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['duyuru'],

  permLevel: 2
};

exports.help = {
  name: 'duyurus',
  description: 'Duyuru.',
  usage: 'duyuru <Mesaj>'
};