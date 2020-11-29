const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//splashen
    let tag = ayarlar.tag
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let sesli = 0
    for (const [id, voiceChannel] of voiceChannels) sesli += voiceChannel.members.cache.size;

    const embedsay = new Discord.MessageEmbed()
        .setTitle(`\`• ${message.guild.name} Sunucu İstatistikleri \` `)
        .setDescription(` 
         <a:sari3:751558669585612830> • **__Sunucudaki üye sayısı__** \`${message.guild.memberCount}\`
         <a:sari3:751558669585612830> • **__Çevrimiçi üye sayısı__** \`${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`
         <a:sari3:751558669585612830> • **__Seslideki üye sayısı__** \`${sesli}\`
         <a:sari3:751558669585612830> • **__Tagdaki üye sayısı__** \`${message.guild.members.cache.filter(tag => tag.user.username.includes('ﾑ')).size}\``)
        .setImage(`https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif`)
    message.channel.send(embedsay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['total'],
    permLevel: 0
};

exports.help = {
    name: 'say'
  //splashen
}