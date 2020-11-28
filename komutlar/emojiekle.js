const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let üyeHATA = new Discord.MessageEmbed()
  .setDescription(`
  Yanlış komut kullanımı \`$emojiekle [link] [isim]\``)
   .setFooter('Emoji isminde türkçe karakter bulunmadığına ve linkin doğru olduğundan emin olun.')
    if((args[1].includes['ç', 'ö', 'ü', 'ş', 'İ', 'I', 'ğ', 'Ç', 'Ö', 'Ü', 'Ş', 'Ğ']))
      message.delete() 
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');
if(!args[0]) return message.channel.send(üyeHATA);
if(!args[1]) return message.channel.send(üyeHATA)
message.guild.emojis.create(args[0], args.slice(1).join(' ')).then(s => {
message.channel.send(`${s.name} adında emoji oluşturuldu. (${s})`);
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiekle'],
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-ekle'
};