const Discord = require('discord.js');
const levels = require('discord-xp');
const DiscordStopSpam = require("discord-stop-spam");
const client = new Discord.Client();
const mongoose = require('./database/mongoose');
const fs = require(`fs`);
require('dotenv').config();
const port = process.env.PORT || 5000;
const host = '0.0.0.0';
const logger = require("discordjs-logger");
const msglog = client.channels.cache.get(`${process.env.MSGLOG}`);



const chalk = require('chalk');
const { Player } = require('discord-player');
const Gamedig = require('gamedig');
const { message } = require('discordjs-logger');

client.prefix = (`${process.env.PREFIX}`);
client.commands = new Discord.Collection();

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
const player = fs.readdirSync(`./player`).filter(file => file.endsWith('.js'));
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.on("messageDelete", function (message) {
    //if(message.author.user.bot) return;
    if(message.author.bot) return;
    if(message.webhookID) return;
    const deletedembed = new Discord.MessageEmbed()
    .setTitle(`Deleted Message`)
    .addField(`Message Author:`, `<@${message.author.id}> - (${message.author.id})`)
    .addField(`Channel:`, `${message.channel}, ID: (${message.channel.id})`)
    .addField(`Content:`, `${message}`, false)
    .setTimestamp()
    .setThumbnail(`${process.env.SERVERLOGO}`)
    .setColor(`BLUE`)
    client.channels.cache.get(`${process.env.MSGLOG}`).send(deletedembed);
})

client.on(`messageUpdate`, async(oldMessage, newMessage,) => {
    if (!oldMessage.author) return;
    if(oldMessage.webhookID) return;
    if(newMessage.webhookID) return;
    if (oldMessage.author.bot) return;
    if (newMessage.author.bot) return;
    const msglog = client.channels.cache.get(`${process.env.MSGLOG}`)
    const EditLog = new Discord.MessageEmbed()
    .setTitle(`Edited Message`)
    .addField(`Edited By`, `${oldMessage.author} - (${oldMessage.author.id})`)
    .addField('Channel:', `${oldMessage.channel} - ID: (${oldMessage.channel.id})`)
    .addField(`Old Message:`, oldMessage)
    .addField(`Edited Message:`, newMessage)
    .setColor(`BLUE`)
    .setTimestamp()
    .setThumbnail(`${process.env.SERVERLOGO}`)
   await msglog.send(EditLog);
})
mongoose.init();
client.login(process.env.TOKEN)