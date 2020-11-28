const Discord = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(1024, 720);
const ctx = canvas.getContext("2d");
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  
 const Canvas= require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
    const background = await Canvas.loadImage('https://i.hizliresim.com/JeHsxM.jpg');
 const { body } = await request.get(message.author.avatarURL());
 const pp =await Canvas.loadImage(body);
const çerçeve = await Canvas.loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgwNVUB_DkJ-RliBWJ0Ru0sO2f3w4gsKQU4VVCE1tYacpqGOVS");
   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 ctx.drawImage(çerçeve, 30,200 , 60, 60);
ctx.drawImage(pp, 30,200 , 105, 105);
      ctx.fillStyle = "#000000";
    ctx.font = "60px Arial";
    ctx.fillText(message.author.username,170,270,)
    ctx.font = "Normal 45px Arial";
    ctx.fillText(args.slice(0).join(' ') ,30,400,);
    ctx.fillText(``,10,240,);  
   const sorgu = new Discord.MessageAttachment(canvas.toBuffer(), "img/jauTWEET.png");
  message.channel.send(sorgu);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'Genel',
  permLevel: 0
};

exports.help = {
  name: 'tweet',
  isim: 'tweet',
    description: 'Twitter posu atar',
  usage: 'tweet [Mesaj]'
};