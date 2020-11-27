const ayarlar = require('../ayarlar.json');
module.exports = message => {
  const Discord = require('discord.js')
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      let em = new Discord.MessageEmbed()
     .setAuthor("・  " + `\`${message.author.username}\``, message.author.avatarURL())  
      .setDescription(`
      
     <a:onayred:780481839147384912> **Sistemde** \`\`${command}\`\` **adında bir komut bulunmuyor! Komutlarıma göz atmak için** \`\`${ayarlar.prefix}yardım\`\`
      
      `)
      message.channel.send(em)
    }
  }
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};