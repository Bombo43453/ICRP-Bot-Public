const chalk = require('chalk');
const fivem = require("discord-fivem-api");
const server = new fivem.DiscordFivemApi(`${process.env.SERVERIP}`);
const Gamedig = require(`gamedig`);
const Discord = require(`discord.js`);
const fetch = require('node-fetch');

module.exports = {
    name: "status",
    description: "Display Players Online",
    aliases: ['players'],
  async   execute(client, message, args, Discord){
        const playerFile = await fetch(`http://${process.env.SERVERIP}/players.json`)
        const newPlayerFile = await playerFile.json()
        const infoFile = await fetch(`http://${process.env.SERVERIP}/info.json`)
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
          
        } else {
          playerAmount = '0';

        }
        const statusembed = new Discord.MessageEmbed()
            .setTitle(`Players Online:`)
            .setDescription(`**᲼${playerAmount} / ${maxPlayers}**`)
            .setThumbnail(`${process.env.SERVERLOGO}`)
            .setColor(`BLUE`)
        message.channel.send(statusembed)
     }
}