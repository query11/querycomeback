const Discord = require("discord.js");
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



/////// resimli giriş çıkış
const db = require('quick.db')
client.on("guildMemberAdd", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
      const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
      if(gözelkanal) {
      let username = member.user.username;
        if(gözelkanal.type === "text") {
          const bg = await Jimp.read("https://cdn.discordapp.com/attachments/756645089186545745/756650644990984282/geldim.png");
          const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);
          var font;
          if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
          else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
          
          await userimg.resize(362, 362);
          await bg.composite(userimg, 30, 30).write("./img/"+ client.user.username + "Hosgeldin.png");
          setTimeout(function () {
            if(member.user.id === ayarlar.sahip){
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"))
              gözelkanal.send("İşte Bak! Kurucum sunucuya giriş yaptı.")
            } else {    
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"));
              gözelkanal.send(`>  📥 <@${member.id}> \`sunucumuza katıldı\` \n > <a:jke:754772326704218112> \`Sunucumuz şuan \` _\`${member.guild.members.size}\`_ \`kişi\``)
            }
          }, 1000);
          setTimeout(function () {
            fs.unlinkSync("./img/" + client.user.username + "Hosgeldin.png");
          }, 10000);
        }
      }
    }
})

client.on("guildMemberRemove", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
        const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
    if (gözelkanal) {
        let username = member.user.username;
        if (gözelkanal.type === "text") {            
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/756645089186545745/756945239264067715/ayrld2.png");
            const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
          
            await userimg.resize(362, 362);
            await bg.composite(userimg, 30, 30).write("./img/"+ client.user.username + "Gorusuruz.png");
              setTimeout(function () {
                if(member.user.id === ayarlar.sahip){
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"))
                  
                } else {
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"));
                  gözelkanal.send(`>  📤 <@${member.id}> \`sunucumuzdan ayrıldı\` \n <a:jke:754772326704218112> \`Sunucumuz şuan \` _\`${member.guild.members.size}\`_ \`kişi\``)
                }
              }, 1000);
              setTimeout(function () {
                fs.unlinkSync("./img/" + client.user.username + "Gorusuruz.png");
              }, 10000);
        }
    }
  }
})

////// resimli giriş çıkış sonds


client.on("guildMemberAdd", (member) => {
  let embed = new Discord.RichEmbed()
  .setTitle("<a:pembeh:751553654561046619> __Jau Land'a hoşgeldin!__")
  .setDescription(`
  
» <a:pembeh:751553654561046619> **Öncelikle altyapıları alıp sunucudan çıkan ve bunu tekrarlayan üyeler 2. uyarıdan sonra sunucudan sınırsız yasaklanır.**

» <a:pembeh:751553654561046619> **Paylaştığım herhangi bir altyapıyı kendi adınıza paylaşamazsınız.Bunun için lütfen izin dahi istemeyiniz.**

» <a:pembeh:751553654561046619> **Altyapılara erişmek için <#736328324548264077> kanalına hangi altyapıyı istiyorsanız aşağıdaki gibi bir ekran görüntüsü atmalısınız.En yakın zamanda rolleriniz verilir.**
  `)
  .setImage('https://cdn.discordapp.com/attachments/761600168797405265/771413671653015552/unknown.png')
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
