var version = '0.9'
const chalk = require('chalk');
const fivem = require("discord-fivem-api");
const Gamedig = require(`gamedig`);
const Discord = require(`discord.js`);
const fetch = require('node-fetch');
const request = require("request");
const server = new fivem.DiscordFivemApi(`51.195.104.11:30120`);

//UNDO THE SLASHES BELOW AND IT WILL WORK
// module.exports = async (client) => {
    console.log(`
   
     
 
888   e88'Y88 888 88e  888 88e    888 88b,   e88 88e   88P'888'Y88 
888  d888  'Y 888 888D 888 888D   888 88P'  d888 888b  P'  888  'Y 
888 C8888     888 88"  888 88"    888 8K   C8888 8888D     888     
888  Y888  ,d 888 b,   888        888 88b,  Y888 888P      888     
888   "88,d88 888 88b, 888        888 88P'   "88 88"       888     
                                                                   
                                                                   
                                                                        
           
    `)
    console.log(`Made By Bombo43453#1901, Credit to the following users:
TAMR112
LYON
ZerioDev
Txzsi
(More Info On ReadMe)
    `)
    console.log(chalk.red('ALL LOGGING STARTS BELOW'))
    console.log(`Logged in as ${client.user.tag}. Version ${version}, Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    
    console.log(`Code Done Loading`);

    console.log(`PLAYER STATUS UPDATES EVERY 15 SECONDS
    ACTIVE PREFIX == [ ${process.env.PREFIX} ]`)
    console.log((chalk.green)`PLAYER STATUS UPDATED, NOW UPDATING EVERY 15 SECONDS`)
    
    
   
  setInterval(async() => {
   try{ Gamedig.query({
        type: 'fivem',
        host: process.env.SERVERIP2,
        port: process.env.SERVERPORT
      }).then(async(state) => {
        let aop = state.map.substring(6);
        
        
    const playerFile = await fetch('')
    const newPlayerFile = await playerFile.json()
    const infoFile = await fetch("")
    const infoOutput = await infoFile.json()
    let maxPlayers = infoOutput.vars.sv_maxClients;

    let serverPlayers = [];
    newPlayerFile.forEach(player => {
      serverPlayers.push(`[${player.id}] ${player.name} || Ping: ${player.ping}`)
    })
    const server = client.guilds.cache.get(`${process.env.DISCORDIP}`);
    const statusChannel = server.channels.cache.get(`${process.env.SERVERSTATUS}`);
    const messageID = process.env.STATUSMSG;
    let playerAmount;
    if(serverPlayers.length) {
      playerAmount = serverPlayers.length;
      client.user.setActivity(`${playerAmount}/${maxPlayers}`, { type: "WATCHING"})
    } else {
      playerAmount = '0';
    }
    if(process.env.SERVERNAME) {
      serverName = process.env.SERVERNAME;
    } else {
      serverName = 'None Set!';
    }
    let playerList;
    if(serverPlayers.length) {
      playerList = serverPlayers.join(`
`)
    } else {
      playerList = 'No One Is Online :(';
    }
    
      const status_embed = new Discord.MessageEmbed()
    .setColor(`BLUE` || `ORANGE`)
    .setTitle(`ICRP`)
    .addField('**Server Status:**', `:white_check_mark:   Online`, true)
    .setDescription(`**Players Online:᲼᲼${playerAmount} / ${maxPlayers}  **\n\`${playerList}\``)
    .addField('**Current AOP**', `${aop}`, true)
    .setThumbnail(`${process.env.SERVERLOGO}`)
    
    .setTimestamp()
    statusChannel.messages.fetch(messageID).then(messageToEdit => {
      messageToEdit.edit(status_embed).catch(err => {
        
      })
    })
  });
    }catch (err) {
      const server = client.guilds.cache.get(`${process.env.DISCORDIP}`);
      const statusChannel = server.channels.cache.get(`${process.env.SERVERSTATUS}`);
      const embed1 = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setAuthor(`If This Is Wrong Make A Ticket`)
    .setTitle(`ICRP`)
    .addField('**Server Status:**', `⛔ Offline`, true)
    .addField(`**AOP**`, `Server Offline`, true)
    .setThumbnail(`${process.env.SERVERLOGO}`)
    .setTimestamp()
      client.user.setActivity(`Hi`, { type: "WATCHING"})
      statusChannel.messages.fetch(`${process.env.STATUSMSG}`).then((msg) => {
          msg.edit(embed1)
          console.log(`SERVER SHOULD BE OFFLINE... Or Bot Is Booting`)
      })
    }
    
  }, 7000);

  const logembed = new Discord.MessageEmbed()
    .setTitle(` Bot Online!`)
    .setDescription(` If This Was Not Intentional, The Bot Had Crashed Earlier`)
    .setTimestamp()
    .setColor(`GREEN`)
  client.channels.cache.get(`${process.env.MSGLOG}`).send(logembed);
 


      }
