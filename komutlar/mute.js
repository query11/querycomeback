const Discord = require('discord.js');
const database = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Bu komutu sadece** \`"MANAGE_MESSAGES"\` **yetkisine sahip kişiler kullanabilir.**`))
   let üyes = new Discord.MessageEmbed()
  .setDescription(`**Belirttiğin kullanıcıyı susturamıyorum.**`)
     .setFooter('Kişinin rolü bottan üstteyse veya ADMIN yetkisi var ise susturulmaz.')
      .setAuthor('Jau','https://cdn.discordapp.com/avatars/656531150897938453/560c982e1dbebadfa7ede412a8bc21d5.webp?size=2048')
    let üyeHATA2 = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`-mute [@kullanıcı] [süre] [sebep]\``)
    .setFooter('Belirtilen üyenin sunucuda bulunduğundan emin olun')
if(!args[0]) return message.channel.send(üyeHATA2);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(üyeHATA2)
  if(member.hasPermission('ADMINISTRATOR')) return message.channel.send(üyes).then(m => m.delete({timeout : '5000'}))
let infinity = false;
if(args[1]) {
infinity = args.find(a => a.endsWith('m') || a.endsWith('h') || a.endsWith('s') || a.endsWith('d') || a.endsWith('w') || a.endsWith('y'));
};
const mutedROL = message.guild.roles.cache.find(x => x.name === 'Susturulmuş')
if(!mutedROL) {
var role = await message.guild.roles.create({
data : {
name : 'Susturulmuş',
color : '#aa3d3d',
permissions : []
}

})

  message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
    await channel.createOverwrite(role, {
      SEND_MESSAGES : false,
      ADD_REACTIONS : false
    })
  })
}
var sayı = 0;
let zaman;
let gercek;
args.forEach(s => {
sayı++
if(s === infinity) {
gercek = sayı;
zaman = args[sayı-1];
};
});
args[gercek-1] = '';
args = args.filter(a => a !== '');

let reason;
if(!args[1]) reason = 'Belirtilmemiş';
if(args[1]) reason = ''+args.slice(1).join(' ');

if(!zaman) {
member.roles.add(mutedROL).then(() => {
return message.channel.send(new Discord.MessageEmbed().setDescription(`**${member}** adlı kullanıcı **Sonsuza Kadar**  \`${reason}\` sebebiyle susturuldu`));
});
} else {

let zamann = zaman.replace('w', ' week').replace('d', ' day').replace('s', ' second').replace('m', ' minute').replace('h', ' hour');
if(zamann.includes('second') && zamann.split(' ')[0] == 1) zamann = 'now'
if(zamann.includes('second') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' saniye';
if(zamann.includes('minute') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' dakika';
if(zamann.includes('hour') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' saat';
if(zamann.includes('day') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' gün';
if(zamann.includes('week') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' hafta';
if(ms(zaman) >= 1555553000) return message.channel.send(new Discord.MessageEmbed().setDescription('**En fazla 2 hafta susturma atabilirsin.**'))

member.roles.add(mutedROL).then(() => {
message.channel.send(new Discord.MessageEmbed().setDescription(`**${member}** adlı kullanıcı \`${zamann}\` boyunca \`${reason}\` sebebiyle susturuldu`))
setTimeout(() => {

member.roles.remove(mutedROL)
}, ms(zaman))
return;
});
}

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'mute'
};