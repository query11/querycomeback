const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
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


client.on("ready", () => {
  client.user.setPresence({
    game: { name: `+botekle`, type: "WATCHING" },
    status: "online"
  });
});

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  member.setNickname(`${tag} | ${member.user.username}`);
});

client.on("message", message => {
  let kanal2 = ayarlar.kanalengel2;
  if (message.channel.id == kanal2) {
    if (message.author.id == message.client.user.id) return;
    message.delete(1 * 500);
  }
});

client.on("message", (message, member) => {
  let kanal1 = ayarlar.kanalengel;
  if (message.channel.id == kanal1) {
    if (message.author.id == message.client.user.id) return;


    message.delete(1 * 500);
  }
});


client.on("userUpdate", async (oldUser, newUser) => {//splashen
  if (oldUser.username !== newUser.username) {
    let tag = 'lil'
  
    let rol = '767852261690441738'
    
    
    let embed1 = new Discord.RichEmbed()
    .setTitle('𝔯 𝔢 𝔰 𝔱 𝔦 𝔫 𝔭 𝔢 𝔞 𝔠 𝔢.')
    .setDescription(`• ${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    .setThumbnail('https://cdn.discordapp.com/attachments/620989964104237077/767856614111182858/DXiNNc4UQAA0kQw.jpg')
    
    let embed2 = new Discord.RichEmbed()
     .setTitle('• 𝔯 𝔢 𝔰 𝔱 𝔦 𝔫 𝔭 𝔢 𝔞 𝔠 𝔢 .')
    .setDescription(`• ${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
     .setThumbnail('https://cdn.discordapp.com/attachments/620989964104237077/767856614111182858/DXiNNc4UQAA0kQw.jpg')
    
    if (newUser.username.includes(tag) && !client.guilds.get('734903775940182026').members.get(newUser.id).roles.has(rol)) {
      client.channels.get('767853316881121280').send(embed1)
      client.guilds.get('734903775940182026').members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get('734903775940182026').members.get(newUser.id).roles.has(rol)) {
      client.guilds.get('734903775940182026').members.get(newUser.id).removeRole(rol)
      client.channels.get('767853316881121280').send(embed2)
    }

  }
})
