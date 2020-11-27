this.m3rt = { "request": require("syncrequest") };
const { RichEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
  if (!args || args.length == 0) {
    const result = await this.m3rt.request.get.sync("http://coronavirus-19-api.herokuapp.com/countries/");
    if (result.error) throw result.error;
    const data = JSON.parse(result.body)
    const countries = { "world": data.find(object => object.country == "World"), "turkey": data.find(object => object.country == "Turkey"), "europe": data.find(object => object.country == "Europe"), "asia": data.find(object => object.country == "Asia"), "top1": data.filter(a => !["World", "North America", "Asia", "Europe", "Ocenia", "Africa", "Total", "Total:"].includes(a.country)).sort((a, b) => b.cases - a.cases)[0] };
    message.channel.send(new RichEmbed().setTimestamp().setFooter(message.author.tag, message.author.avatarURL).setColor("36393f").setTitle("COVID-19").setDescription(
    `🗺  ***DÜNYA***
**${countries.world.cases}** toplam vaka, **${countries.world.deaths}** toplam vefat, **${countries.world.recovered}** iyileşen, 
**${countries.world.critical}** entübe, **${countries.world.todayCases}** bugünki vaka, **${countries.world.todayDeaths}** bugünki vefat.

     🌍  ***AVRUPA***
**${countries.europe.cases}** toplam vaka, **${countries.europe.deaths}** toplam vefat, **${countries.europe.recovered}** iyileşen, 
**${countries.europe.critical}** entübe, **${countries.europe.todayCases}** bugünki vaka, **${countries.europe.todayDeaths}** bugünki vefat.

     🌏  ***ASYA***
**${countries.asia.cases}** toplam vaka, **${countries.asia.deaths}** toplam vefat, **${countries.asia.recovered}** iyileşen, 
**${countries.asia.critical}** entübe, **${countries.asia.todayCases}** bugünki vaka, **${countries.asia.todayDeaths}** bugünki vefat.

      🇹🇷  ***TÜRKİYE***
__***${countries.turkey.totalTests}***__ toplam test; 
**${countries.turkey.cases}** toplam vaka, **${countries.turkey.deaths}** toplam vefat, **${countries.turkey.recovered}** iyileşen, 
**${countries.turkey.critical}** entübe, **${countries.turkey.todayCases}** bugünki vaka, **${countries.turkey.todayDeaths}** bugünki vefat.

      📛 ***${countries.top1["country"].replace("USA", "AMERİKA").replace("Spain", "İSPANYA").replace("Italy", "İTALYA").replace("Turkey", "TÜRKİYE").replace("Germany", "ALMANYA").replace("France", "FRANSA").replace("Iran", "İRAN").replace("UK", "İNGİLTERE")}*** - *En çok vaka görülen ülke*
__***${countries.top1.totalTests}***__ toplam test; 
**${countries.top1.cases}** toplam vaka, **${countries.top1.deaths}** toplam vefat, **${countries.top1.recovered}** iyileşen, 
**${countries.top1.critical}** entübe, **${countries.top1.todayCases}** bugünki vaka, **${countries.top1.todayDeaths}** bugünki vefat.
`
    ))
  } else {
    const temp = await this.m3rt.request.get.sync("http://coronavirus-19-api.herokuapp.com/countries/");
    if (temp.error) throw temp.error;
    temp.body = JSON.parse(temp.body);
    this.m3rt.countries = []
    temp.body.forEach(object => this.m3rt.countries.push(object.country));
    if (!this.m3rt.countries.includes(args[0])) return message.channel.send("Yanlış ülke girdin, ülkelerin **İngilizce** isimlerini yazmayı dene!");
    const data = await this.m3rt.request.get.sync(`http://coronavirus-19-api.herokuapp.com/countries/${args[0]}`);
    if (data.error) throw data.error;
    data.body = JSON.parse(data.body);
    message.channel.send(new RichEmbed().setTimestamp().setFooter(message.author.tag, message.author.avatarURL).setThumbnail(args[0].includes("urkey") ? "https://cdn.discordapp.com/attachments/686192819273990165/698154667212800067/AdmirableBrownAmmonite-size_restricted.gif?size=2048" : null).setColor("36393f").setTitle("COVID-19").setDescription(
    `**${args[0].includes("urkey") ? args[0].replace(args[0], "TÜRKİYE") : args[0]}** adlı ülkenin **COVID-19** istatistikleri!

__***${data.body.totalTests}***__ toplam test; 
**${data.body.cases}** toplam vaka, **${data.body.deaths}** toplam vefat, **${data.body.recovered}** iyileşen, 
**${data.body.critical}** entübe, **${data.body.todayCases}** bugünki vaka, **${data.body.todayDeaths}** bugünki vefat.
`
    ))
  }
}
exports.conf = { aliases: ["korona", "gorona", "kovid19", "kovid", "covid", "covid19", "kovid-19", "covid-19", "koronavirüs", "korona-virüs", "koronavirus", "coronavirus", "coronavirüs", "corona-virüs", "corona-virus"], permLevel: 0 };
exports.help = { name: "corona" }
