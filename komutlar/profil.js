const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {// can ♡ b#1010

let mention = message.mentions.members.first() || message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let slm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar',
  mobile: 'Mobil'
}
let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});

let nitroDurum = false;
if(mention.presence.activities[0]) {
if(mention.presence.activities[0].emoji) {
if(mention.presence.activities[0].emoji.animated) nitroDurum = true;
};
};
if(mention.avatarURL().includes('.gif')) nitroDurum = true;

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' ')
.replace('HOUSE_BRAVERY', '<:bravery_badge:781900356820795424>')  
.replace('HOUSE_BRILLIANCE', '<:brilliance_badge:781900382620221501>')
.replace('HOUSE_BALANCE', '<:balance_badge:781900368828825661>')
.replace('EARLY_VERIFIED_DEVELOPER', '<:verified_developer_badge:781900480539262997>')
.replace('VERIFIED_DEVELOPER', '')
.replace('PARTNERED_SERVER_OWNER', '<:new_partner_badge:781900500022853632>')
.replace('HYPESQUAD_EVENTS', '<:hypesquad_badge:781900435509870632>')
.replace('BUGHUNTER_LEVEL_1', '<:bug_hunter_badge:781900399203581974>')
.replace('EARLY_SUPPORTER', '<:early_supporter_badge:781900418229075978>')
.replace('SYSTEM', 'Sistem')
.replace('VERIFIED_BOT', 'Onaylı Bot');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
sa = slm[Object.keys(mention.presence.clientStatus)[0]];
};
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(mention.tag, mention.avatarURL({dynamic: true}))
.setThumbnail(mention.avatarURL({dynamic: true}))
.setDescription(`
**Ad** \`[${mention.username}]\` - ${mention}
**Durum** ${mention.presence.status.replace('online', '<:onlinee:781904209964171304> \`Çevrimiçi\`').replace('idle', '<:idlee:781904222073126982> \`Boşta\`').replace('dnd', '<:dndd:781905007301754931> \`Rahatsız Etmeyin\`').replace('offline', '<:offlinee:781904233506799617> \`Çevrimdışı\`')}
**Katılma Tarihi** \`${moment(mentionMember.joinedAt).format('D MMMM YYYY')}\`
**Kayıt Tarihi** \`${moment(mention.createdAt).format('D MMMM YYYY')}\`
**Rozetler** ${rozetler ? mentionFlags : '\`Rozeti Bulunmuyor.\`'}


**__Kullanıcının Rolleri__** 

${mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ')} ${mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ')}
`)
.setFooter(mention.username, mention.avatarURL({dynamic: true}))
.setTimestamp();

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil'],
  permLevel: 0
};
 
exports.help = {
  name : "profil"
}