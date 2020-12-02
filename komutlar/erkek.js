const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {//splashen

    let erkekROL = ayarlar.erkekROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG

    if(!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')


if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = '<a:no2:756946169883656193> Şüpheli'
if (kurulus > 1296000000) kontrol = '<a:budur:740278066248548422> Güvenli'
  
  
  
let isim = args[1]

if(!isim) return message.channel.send(`Üyenin ismini belirtmelisin.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`Üyenin yaşını belirtmelisin.`)
  
const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter('Kayıt Saati')
.setColor(`#fffff0`)
let tag = ayarlar.tag || ''
message.guild.members.cache.get(kullanıcı.id).setNickname(`${tag} ${isim} • ${yaş}`)
message.guild.members.cache.get(kullanıcı.id).roles.add(erkekROL)
  message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtlıROL)
  if(ayarlar.erkekICON) {
    let erkekICON = ayarlar.erkekICON
      message.guild.members.cache.get(kullanıcı.id).roles.add(erkekICON)
  }
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsızROL)
message.guild.members.cache.get(kullanıcı.id).send(emb.setDescription(`• Kaydın ${message.author} tarafından yapıldı. \n • **Erkek** ve **Kayıtlı** rollerini aldın. \n • Kurallar kanalımızı okumayı unutma!`))
 
let embed2 = new Discord.MessageEmbed()
.setDescription(`
<a:tik4:756946179530424541> »  __**Bir Erkek Kayıt Oldu**__
<a:kraltac:740610303628279808> • Kayıt Olan Kullanıcı ${kullanıcı} - \`[${kullanıcı.id}]\`
<a:kraltac:740610303628279808> • Cinsiyet **Erkek** [<@&${ayarlar.erkekROL}>]
<a:kraltac:740610303628279808> • İsim Yaş  **${isim} | ${yaş}**
<a:kraltac:740610303628279808> • Kayıt eden yetkili | ${message.author} \`[${message.author.id}]\`
`)



client.channels.cache.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new Discord.MessageEmbed()
.setColor('WHITE')

.setDescription(`
<a:tik4:756946179530424541> » __**Kayıt Başarıyla Tamamlandı**__
                <a:kraltac:740610303628279808> • Kayıt Olan Kullanıcı ${kullanıcı} 
                 • İsim Yaş  **${isim} | ${yaş}**
                 • Cinsiyet **Erkek** [<@&${ayarlar.erkekROL}>]
                 • Kayıt eden yetkili | ${message.author}

`)
message.channel.send(embed3).then(m => m.delete({timeout : '5000'}))


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'erkek'
}//splashen