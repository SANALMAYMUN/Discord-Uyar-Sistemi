const Discord = require('discord.js');

const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {



/// TANIMLAR

var sebeb = args.slice(1).join(" ");

var kisi = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]); 

/// WEBHOOK GÖNDER



  
// YÖNETİCİ KONTROL
      if (message.author.id !== ayarlar.sahip) return message.channel.send(new Discord.MessageEmbed().setDescription("Malesef Yönetici Yetkim Yok")).then(m => m.delete({timeout: 5000}));

      let m = message.mentions.members.first()
      if(!m) return
      if (m.roles.cache.has(ayarlar.alert)) return message.channel.send(new Discord.MessageEmbed().setDescription("Kişi Zaten Uyarı Almış !!!"));




// PERM VER
      let alertke = ayarlar.alert;

      let usize = message.mentions.users.array().length;

      let u = message.mentions.users.array();

      for(let i=0; i < usize; i++){

        let uyarmgd = message.guild.members.cache.find(r => r.id == u[i].id)
        uyarmgd.roles.add(alertke);


      }




      // CEZA İD 

      let cezaids = [
        '** 1**',
        '** 2**',
        '** 3**',
        '** 4**',
        '** 5**',
        '** 6**',
        '** 7**',
        '** 8**',
        '** 9**',
        '** 10**',
        '** 11**',
        '** 12**',
        '** 13**',
        '** 14**',
        '** 15**',
        '** 16**',
        '** 17**',
        '** 18**',
        '** 19**',
        '** 20**',
        '** 21**',
        '** 22**',
        '** 23**',
        '** 24**',
        '** 25**',
        '** 26**',
        '** 27**',
        '** 28**',
        '** 29**',
        '** 30**',
        '** 31**',
        '** 32**',
        '** 33**',
        '** 34**',
        '** 35**',
        '** 36**',
        '** 37**',
        '** 38**',
        '** 39**',
        '** 40**',
        '** 41**',
        '** 42**',
        '** 43**',
        '** 44**',
        '** 45**'

        ];

        var now = new Date()
        if (!sebeb) {
          try {
      const uyarkeeeeeee = new Discord.MessageEmbed()
      .setTitle("Uyarı !!!")
      .setDescription(`Merhaba ${kisi} Şu Yetkili Tarafından Ceza Yedin => ${message.author} Sebebi İse => **${sebeb}** Bu Nedenle Ceza Yedin. Ceza İD: ${cezaids[Math.floor(Math.random() * cezaids.length)]}`)
      .setColor("RANDOM")
      message.channel.send(uyarkeeeeeee)
    } catch (error) {
      message.reply("Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
      console.log(error)
    }
  } else {
try {
  const uyarkeeeeeee = new Discord.MessageEmbed()
  .setTitle("Uyarı !!!")
  .setDescription(`Merhaba ${kisi} Şu Yetkili Tarafından Ceza Yedin => ${message.author} Sebebi İse Bu : **${sebeb}** Bu Nedenle Ceza Yedin. Ceza İD: ${cezaids[Math.floor(Math.random() * cezaids.length)]}`) 
  .setColor("RANDOM")
  message.channel.send(uyarkeeeeeee)
} catch (error) {
  message.reply("Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
  console.log(error)
}
  }



      client.channels.cache.get(ayarlar.alertkanalid).send(
        new Discord.MessageEmbed()
      .setTitle("Bir Kullanıcı Uyarı Yedi")
      .setDescription(`${kisi} ${message.author} Diye Bir Yetkili Tarafından Ceza Yedi. Sebebi İse Şu => **${sebeb}** Ceza ID : ${cezaids[Math.floor(Math.random() * cezaids.length)]}`) 
      .setColor("RANDOM")
      )

      
              
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'uyar',
    description: '',
    usage: 'uyar'
};
