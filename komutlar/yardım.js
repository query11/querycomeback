const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  if (params[0]) {
    message.channel.sendCode("js", `KOMUTLAR:

${prefix}js         ::  JavaScript kanallarına erişim sağlar.
${prefix}istek-kod  ::  İstediğiniz kodu Paylaşımcılara bildirir.
${prefix}ping       ::  Botun pingini gösterir.`);
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};