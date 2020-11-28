const Discord = require("discord.js");
require("events").EventEmitter.defaultMaxListeners = 30000;
  require("events").defaultMaxListeners = 30000;
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
var Jimp = require('jimp');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(ayarlar.token);




client.on('message', async msg => {
  if (msg.content === "<@!760535868834054154>") msg.channel.send(new Discord.MessageEmbed().setDescription(`**Yolunu mu kaybettin? Bu sana yardımcı olabilir**  \`${ayarlar.prefix}yardım\``));
});


client.on("guildCreate", guild => {
    let log = client.channels.cache.get("782307835643822121");
  const embed = new Discord.MessageEmbed()
    .setAuthor("Bir Sunucuya Eklendim!")
    .setThumbnail(guild.iconURL() ||"https://cdn.discordapp.com/avatars/656531150897938453/560c982e1dbebadfa7ede412a8bc21d5.webp?size=2048")    
  .setColor("GREEN")
         .setDescription(`
         \`${guild.name}\`,
   ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
    **SUNUCU SAHİBİ :** ${guild.owner}
    **SUNUCU ID :**\`${guild.id}\`
    **SUNUCU ÜYE :** \`${guild.members.cache.size}\`
    ●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●`)
  .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL());
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.cache.get("782307857278173225");
  const embed = new Discord.MessageEmbed()
    .setAuthor("Bir Sunucudan Çıkarıldım")
    .setThumbnail(guild.iconURL() ||"https://cdn.discordapp.com/avatars/656531150897938453/560c982e1dbebadfa7ede412a8bc21d5.webp?size=2048")
    .setColor("RED")
    .setDescription(`
    SUNUCU İSMİ : \`${guild.name}\`,
    SUNUCU SAHİBİ : ${guild.owner} \`[${guild.owner.id}]\`
    SUNUCU ID :\`${guild.id}\`
    SUNUCU ÜYE : ${guild.members.cache.size}
    SUNUCU KANAL : ${guild.channels.cache.size}`).setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL());
  log.send(embed);
});
