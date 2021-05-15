var version = '0.9'
const chalk = require('chalk');
const fivem = require("discord-fivem-api");
const Gamedig = require(`gamedig`);
const Discord = require(`discord.js`);
const fetch = require('node-fetch');
const request = require("request");
const server = new fivem.DiscordFivemApi(`51.195.104.11:30120`);

module.exports = async (client) => {
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
  console.log(`
    ACTIVE PREFIX == ([ ${process.env.PREFIX} ])
  `)
    
  const logembed = new Discord.MessageEmbed()
    .setTitle(` Bot Online!`)
    .setDescription(` If This Was Not Intentional, The Bot Had Crashed Earlier`)
    .setTimestamp()
    .setColor(`GREEN`)
  client.channels.cache.get(`${process.env.MSGLOG}`).send(logembed);
 


      }
