const Discord = require('discord.js');
const DiscordStopSpam = require("discord-stop-spam");
module.exports =  async (client, message) => {
 if(message.author.bot) return;
 //BLACKLIST BELOW
 const logChannel = client.channels.cache.find(channel => channel.id === `${process.env.MSGLOG}`)
 const Log2Channel = client.channels.cache.find(channel => channel.id === `${process.env.LOG}`)
 let words = [ "nibba", "faggot", "fag", "nigger", "nigga", "beaner", "niglet","anal", "jack off", "ni88a", "jerk off","I'm hard", "Jerk me ", "ICRP IS SHIT"]
//ADD TO THE WORDS ABOVE, FOLLOW FORMAT


 let foundinText =  false;
 for (var i in words){
         if (message.content.toLowerCase().includes(words[i].toLowerCase())) foundinText = true;
     }

 if (foundinText){
     let logEmbed = new Discord.MessageEmbed()
     .setDescription(`**A Blacklisted Word Was Said**`)
     .addFields(
       {name: `Author:`,value:  `${message.author} -(${message.author.id})`, inline: true},
       {name: `Channel:`, value: `${message.channel}`, inline: true},
       {name: `Guild/Server:`, value: `${message.guild.name}`, inline: true},
       {name: `Message:`,value: `${message.content}`, inline: false }
     )
     .setColor('RED')
     .setTimestamp()
     Log2Channel.send(logEmbed)

     let embed = new Discord.MessageEmbed()
     .setTitle(`You Said A Blacklisted Word`)
     .setDescription(`This Word Is Not Permitted, You Have Been Reported `)
     .setColor('RED')
     .setTimestamp()
     let msg = await message.channel.send(embed);
     message.delete()
     msg.delete({timeout: '6500'})
 };

 //BLACKLIST END
//BELOW IS MUTE ROLE
if (message.channel.type === 'dm') return;
  if (message.member.roles.cache.some(role => role.name === 'MUTED') || (message.member.roles.cache.some(role => role.name === 'Muted'))) {
    message.delete()
    message.member.send(`You Are Muted`)
    return;
  }
  //BELOW IS SPAM THING
await DiscordStopSpam.logAuthor(message.author.id); // Save message author
    await DiscordStopSpam.logMessage(message.author.id, message.content); // Save message content
    const SpamDetected = await DiscordStopSpam.checkMessageInterval(message); // Check sent messages interval
    if(SpamDetected) { // If SpamDetected
        const embed3 = new Discord.MessageEmbed()
    .setTitle(`Spam Caught`)
    .setColor(`BLUE`)
    .setThumbnail(`${process.env.SERVERLOGO}`)
    .addFields(
        {name: `Author:`, value: `${message.author}`, inline: true},
        {name: `Channel`, value: `${message.channel}`, inline: true},
        {name: `Content:`, value: `${message.content}`, inline: false}
    )
        message.delete()
        DiscordStopSpam.warnUserEmbed(message).then(msg => {
            msg.delete({ timeout: 5000})
        })
        client.channels.cache.get(`${process.env.MSGLOG}`).send(embed3);
    };

//Message Handler Below
 

  const prefix = `${process.env.PREFIX}`

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (cmd) cmd.execute(client, message, args, Discord);

 
};