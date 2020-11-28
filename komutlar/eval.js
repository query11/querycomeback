const Discord = require("discord.js");
const moment = require('moment')
require("moment-duration-format");
const db =require("quick.db")

exports.run = async (client, message, args) => {
  if(message.author.id =="478466612803141645"){

    let arguman = args.slice(0).join(" ");
    if (!arguman) return await message.react(`⁉️`);
    
    function clean(text) {
      if (typeof text !== "string") 
      text = require('util').inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
      return text
    };
    
    try {
      let evaled = clean(await eval(arguman));
      
      const firstEmbed = new Discord.MessageEmbed()
      .addField("📥 Giriş",`\`\`\`js\n${arguman}\`\`\``)
      .addField("📤 Çıkış",`\`\`\`js\n${evaled}\`\`\``)
      .setTimestamp()
      .setColor("#7289DA")
      message.channel.send(firstEmbed)
    } catch(err) {
      const secondEmbed = new Discord.MessageEmbed()
      .addField("🆘 Hata", `\`\`\`js\n${err}\`\`\``)
      .setTimestamp()
      .setColor("#FF0000")
      message.channel.send(secondEmbed)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'eval',
  açıklama : 'Botun yardım komutlarını gösterir.'
};//