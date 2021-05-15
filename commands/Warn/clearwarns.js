const { MessageEmbed } = require('discord.js');
const db = require('../../database/models/warns')


module.exports = {
    name: `clearwarning`,
    aliases: [`clearwarn`, `clearwarns`, `remove-all-warns`, `clearwarnings`],
    description: `Remove A Warning`,
async execute(client, message, args, Discord){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You Do Not Have Permission To Use This Command (Only Administrators can Clear Warnings)`)
    const user = message.mentions.members.first() || message.guild.member.cache.get(args[0]);
        const nouser = new Discord.MessageEmbed()
            .setTitle(`User Not Found`)
            .setColor(`BLUE`)
            .setThumbnail(`${process.env.SERVERLOGO}`)
            .setDescription(`Make Sure This User Has Been Warned Before`)
            .addField(`Usage`, `${process.env.PREFIX}clearwarnings (user) (reason)`)
    if(!user) return message.channel.send(nouser)
    const reason = args.slice(1).join(' ') || `No Reason Provided`;
    db.findOne({ guildid : message.guild.id, user: user.user.id}, async (err, data) => {
        if(err) throw err;
        if(data){
            await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id })
            const clearembed = new Discord.MessageEmbed()
                .setTitle(`Warnings Cleared`)
                .setColor(`BLUE`)
                .setThumbnail(`${process.env.SERVERLOGO}`)
                .addField(`Cleared By:`, `${message.author}`, true)
                .addField(`User Cleared:`, `${user}`, true)
                .addField(`Reason:`, `${reason}`)
                .setTimestamp()
            message.channel.send(clearembed)
            client.channels.cache.get(`${process.env.LOG}`).send(clearembed)
        } else {
            const elsy = new Discord.MessageEmbed()
                .setTitle(`User Not Found`)
                .setDescription(`Make Sure The User Has Been Warned, Or Run This Command In The Server They Were Warned In`)
                .addField(`Usage`, `${process.env.PREFIX}clearwarnings (user) (reason)`)
                .setColor(`BLUE`)
                .setThumbnail(`${process.env.SERVERLOGO}`)
            message.channel.send(elsy)
        }
    })
    }
}