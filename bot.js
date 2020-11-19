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


client.on("ready", () => {
  client.user.setPresence({
    game: { name: `+botekle`, type: "WATCHING" },
    status: "online"
  });
});

client.on("guildMemberAdd", member => {
  let tag = '・'
  member.setNickname(`${tag} ${member.user.username}`);
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





client.on("guildMemberAdd", (member) => {
  let embed = new Discord.RichEmbed()
  .setTitle("<a:pembeh:751553654561046619> __Jau Land'a hoşgeldin!__")
  .setDescription(`
  
» <a:pembeh:751553654561046619> **Öncelikle altyapıları alıp sunucudan çıkan ve bunu tekrarlayan üyeler 2. uyarıdan sonra sunucudan sınırsız yasaklanır.**

» <a:pembeh:751553654561046619> **Paylaştığım herhangi bir altyapıyı kendi adınıza paylaşamazsınız.Bunun için lütfen izin dahi istemeyiniz.**

» <a:pembeh:751553654561046619> **Altyapılara erişmek için <@714141828340777043>'in DM kutusuna aşağıdaki gibi bir ekran görüntüsü atmalısınız.En yakın zamanda rolleriniz verilir.**
  `)
  .setImage('https://cdn.discordapp.com/attachments/768421922622406676/779066552816762901/unknown.png')
member.send(embed)})


client.on('guildMemberAdd',async member => {
 let user = client.users.get(member.id);
  let kanal = member.guild.channels.find('id', '778958120407269388')
 const { get } = require('node-superfetch');
  let moment = require('moment')
  require('moment-duration-format')
  const avatar =member.user.displayAvatarURL
const kuruluş = user.createdAt.getTime();
  
  const tarih = new Date().getTime() - user.createdAt.getTime();
 var tarihi = moment.duration(tarih).format(" D [gün] H [saat] m [dakika] s [saniye]")
                                                                    
  if (tarih < 262980000) return
   var inceleme;
    if (tarih > 2629800000) inceleme = 'GÜVENLİ'
    if (tarih < 2629800000) inceleme = 'ŞÜPHELİ'
  let emb = new Discord.RichEmbed()
  .setThumbnail(avatar)
  .setDescription(`
 __**BİR KULLANICININ HESABI GÜMRÜK KAPISINA TAKILDI**__

__**\`KULLANICININ HESAP BİLGİLERİ\`**__
» <a:pembeh:751553654561046619>** İSİM = \`${user.username}\` **
» <a:pembeh:751553654561046619>** HESAP KURULUŞ TARİHİ = ${tarihi}**
» <a:pembeh:751553654561046619>** YAPILAN EYLEM = \`KULLANICI YASAKLANDI\`**`)
  kanal.send(emb)
 
});

client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3)//mesaj yazınca xp veriyor

};

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) > 12) {//150 xp de 1 seviye veriyor
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)//seviye verildi
    

    
    db.delete(`puan_${msg.author.id + msg.guild.id}`)//xp silindi
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {//rol 
  if (db.has(`rollss_${msg.guild.id}`) === true) {//rol seviye
    

   let rol = ayarlar.levelROL;
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == 2) {
    if (msg.member.roles.has(msg.guild.roles.get(rol)) === false) {
    msg.channel.send(`**<@${msg.author.id}> başarıyla ${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0} seviyeyi geçtin!**`)
     
    msg.member.addRole(rol)
    }
  };

}};
  
});



client.on("message", async message => {
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '✅'
    const backwards = message.createReactionCollector(backwardsFilter, { time: 0 });
  let letter = ['a','b','c','d','e','f','g','ğ','h','ı','i','j','k','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z']
    if(message.content.toLowerCase().includes('a','b','c','d','e','f','g','ğ','h','ı','i','j','k','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z')) return
//  if(message.author.id = client.user.id) return
  let EMBO = new Discord.RichEmbed().setTimestamp().setAuthor('» Bir Kullanıcı Altyapı İsteğinde Bulundu', message.author.avatarURL).setDescription(`» **Kullanıcı** ${message.author}`);
  if (message.author.id === client.user.id && message.channel.type === "dm") return;
  if (message.attachments.first()) EMBO.setImage(message.attachments.first().url);
 if (message.channel.type === "dm") {
   message.reply('Hangi altypaıyı istiyorsan onun emojisine tıkla')
  message.react('🛃')
 } 
  if (message.channel.type === "dm" || !message.guild) client.channels.get('740535337360818188').send(EMBO);
  if(message.channel.id = '740535337360818188') {
     message.react('✅')
     message.react('❎')
  
  }
});



client.on("ready", () => {
 client.channels.get('779087987035734026').join()
});

const iltifatlar = ['Altyapılara ulaşmak için <#768421922622406676> kanalına bakabilirsiniz'];

var iltifatSayi = 0; 
client.on("message", async message => {
  if(message.channel.id !== "758689889197096990" || message.author.bot) return;
  iltifatSayi++
  if(iltifatSayi >= 20) { // 50 yazan yer, 50 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    iltifatSayi = 0;
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[random]}**`);
  };
});

client.on("ready", () => {
 client.channels.get('779087987035734026').join()
});


client.on("message", async message => {
  if(!message.content.toLowerCase().includes('altyapı nasıl alırım','altyapıyı nerden alacağım','altyapılar nerede')) return;
let eee = new Discord.RichEmbed()
.setDescription(`
<a:sari3:751558669585612830> • Altyapılara ulaşnanız için  <@714141828340777043> 'in DM kutusuna hangi altyapıyı istiyorsanız o videoya like atıp kanala abone olduğunuzun ve saatin gözüktüğü bir ekran görüntüsü atmalısınız.

<a:sari3:751558669585612830> •Attıktan sonra en kısa sürede altyapı rolünüz verilir.Sadece fotoğraf atın boş şeyler yazarsanız banlanırsınız.

<a:sari3:751558669585612830> •Örnek Ekran Görüntüsü: (TAMAMEN AYNISI OLMAK ZORUNDA)
                `)
.setImage('https://cdn.discordapp.com/attachments/768421922622406676/779066552816762901/unknown.png')
  message.reply(eee);
  
});
