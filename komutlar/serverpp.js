const Discord = require("discord.js");

exports.run = (client, message, params) => {

  
  if (message.channel.type !== "dm") {
    const embed = new Discord.MessageEmbed()
      .setAuthor('・Sunucu Fotoğrafı',client.user.avatarURL())
      .setImage(message.guild.iconURL({ dynamic: false, format: 'png', size: 1024 }))
      .setTimestamp()
    return message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-pp", "sunucu-resmi"],
  permLevel: 0
};

exports.help = {
  name: "sunucuresmi"
};