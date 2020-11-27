const superagent = require("snekfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  superagent.get("https://nekos.life/api/v2/img/woof").end((err, response) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("UUUUUUUUU🐶")
      .setImage(response.body.url)
      .setColor("RED")
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "köpek",
  description: "random dog pics",
  usage: "köpek"
};