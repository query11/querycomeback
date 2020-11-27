const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

 
 let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  
 let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    db.set(`log_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
  
        
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}