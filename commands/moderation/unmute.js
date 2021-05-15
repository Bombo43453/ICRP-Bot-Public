const { Message } = require(`discord.js`)
const Schema = require("../../database/models/mute")
module.exports = {
    name: 'unmute',
    description: 'unmute A Player',
async execute(client, message, args, Discord){
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noperms)
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    const Logembed = new Discord.MessageEmbed()
    .setTitle(`Member Unmuted`)
    .addFields(
        {name: `Unmuted By:`, value: `${message.author}`, inline: false},
        {name: `Member Unmuted:`, value: `${Member}`, inline: false}
    )

    const DmEmbed = new Discord.MessageEmbed()
        .setTitle(`YOU HAVE BEEN UNMUTED FROM ICRP`)
        .setDescription(`Try Not To commit this offense again!`)

    if(!Member) return message.channel.send(`Member Not Found`)

    const role = message.guild.roles.cache.find(
        (r) => r.name.toLowerCase() === 'muted'
        );

    Schema.findOne(
        {
            Guild: message.guild.id,
        },
        async (err, data) => {
            if (!data) return message.reply ("Member Was Not Muted!");
            const user = data.Users.findIndex((prop) => prop === Member.id);
            if (user == -1) return message.reply("Member is Not Muted!");
            data.Users.splice(user, 1);
         await Member.roles.remove(role);
         Member.send(DmEmbed)
         client.channels.cache.get(`${process.env.LOG}`).send(Logembed);
                }
    )
        
    }
}