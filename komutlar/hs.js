const Discord = require('discord.js')
exports.run = async (client, message, member) => {
    
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')

 let flags = message.author.flags.toArray()
  let uflags = flags.map(x => x.toString()).join(",");
   uflags = uflags.replace("HOUSE_BRAVERY", ":rozet_bravery: HypeSquad Bravery")
   uflags = uflags.replace("HOUSE_BALANCE",":rozet_balance:  HypeSquad Balance")
   uflags = uflags.replace("DISCORD_PARTNER",":rozet_partner: Partner")
   uflags = uflags.replace("HYPESQUAD_EVENTS",":rozet_hypesquad: Hypesquad Event")
   uflags = uflags.replace("EARLY_SUPPORTER",":rozet_early: Early Supporter")
   uflags = uflags.replace("VERIFIED_DEVELOPER",":rozet_developer: Verified Bot Developer")
  uflags = uflags.replace("HOUSE_BRILLIANCE",":rozet_brillance: HypeSquad Brilliance")
  if(flags == ""){
    uflags = "Rozet bulunamadı"
  }
let miafRozet = new Discord.MessageEmbed()
.setTitle(`${member} Kişinin Rozetleri`)
.setDescription(`Rozetleri : ${uflags}`)
message.channel.send(miafRozet)
  

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-ver'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
    description: 'Herkeze Rol verir',
    usage: 'herkese-rol-ver @rol'
}
