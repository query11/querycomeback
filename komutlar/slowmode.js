const emran = require('discord.js');
//codarev12

exports.run = async(client, message, args) => {
              const codare = require('../ayarlar.json')
            let prefix = codare.prefix
//codarev12

              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanabilmen İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek!.");  
//codarev12
const limit = args[0] ? args[0] : 0;//codare
  if(!limit) {//codare
              var embed = new emran.MessageEmbed()
                .setDescription(`Doğru kullanım: \`${prefix}yavaş-mod [0/100]\``)//codare
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }//codare
if (limit > 100) {
    return message.channel.send(new emran.MessageEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('RED'));
}  
    message.channel.send(new emran.MessageEmbed().setAuthor(`Slowmode Aktif Edildi`,message.author.avatarURL()).setFooter('・Saat') .setTimestamp()
                         .setDescription(`
                         
                         ・ ${message.channel} **kanalına üyeler artık  ${limit}  saniyede bir mesaj gönderebilecek.**
                         
                         \`・ Kapatmak için -slowmode 0\`
                         `)
                         .setColor('GREEN'))
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,

};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};