const codare = require('discord.js')
exports.run = async(message, args) => {

if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için "Kullanıcıları Yasakla" Yetkisine Sahip Olmalısın!`)


let tanersins = args[0]
if(!tanersins) {
 
if (isNaN(tanersins)) {
  

const embeed = await message.guild.fetchBans();
message.guild.members.unban(tanersins)  
if (!tanersins.id === embeed) {


  message.channel.send(new codare.MessageEmbed())

}
}
}

}
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'unban',
  description: 'Herhangi bir kullanıcının IDsini belirterek yasapı kaldırabilirsiniz',
  usage: 'unban '
}