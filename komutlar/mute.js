const Discord = require('discord.js');
const database = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

if(!args[0]) return message.channel.send(``);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Member "${args[0]}" not found`);

let infinity = false;
if(args[1]) {
infinity = args.find(a => a.endsWith('m') || a.endsWith('h') || a.endsWith('s') || a.endsWith('d') || a.endsWith('w') || a.endsWith('y'));
};
const mutedROL = message.guild.roles.cache.find(x => x.name === 'Susturulmuş')
if(!mutedROL) {
var role = await message.guild.roles.create({
data : {
name : 'Susturulmuş',
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
return message.channel.send(`**${message.author.tag}** muted **${member.user.tag}** for infinity. ${reason}`);
});
} else {

let zamann = zaman.replace('w', ' week').replace('d', ' day').replace('s', ' second').replace('m', ' minute').replace('h', ' hour');
if(zamann.includes('second') && zamann.split(' ')[0] == 1) zamann = 'now'
if(zamann.includes('second') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' seconds';
if(zamann.includes('minute') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' minutes';
if(zamann.includes('hour') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' hours';
if(zamann.includes('day') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' days';
if(zamann.includes('week') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' weeks';
if(ms(zaman) >= 2147483647) return message.channel.send('You can mute a maximum of one for 24 days.');// ellemeyin arkadaslar.

member.roles.add(mutedROL).then(() => {
message.channel.send(new Discord.MessageEmbed().setDescription(`**${member.user.tag}** adlı kullanıcıyı ${zamann} boyunca susturdu.  Sebep : ${reason}`))
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