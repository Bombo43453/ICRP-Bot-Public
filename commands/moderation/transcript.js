const { fetchTranscript } = require(`reconlx`);
const { MessageAttachment } = require(`discord.js`);
module.exports = {
    name: `transcript`,
    aliases: [`transcript`, `script`],
    description: `Generate A TransScript`,
async execute(client, message, args, Discord){
    if (!message.member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(`Invalid Permissions.`);
const amount = args[0];
    const noembed1 = new Discord.MessageEmbed()
        .setTitle(`Make Sure You Add An Amount`)
        .addField(`Usage:`, `${process.env.PREFIX}transcript (amount)`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
if (!amount) return message.channel.send(noembed1)
if (isNaN(amount)) {
    const noembed = new Discord.MessageEmbed()
        .setTitle(`Make Sure You Mention A Number`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addField(`Usage:`, `${process.env.PREFIX}transcript (amount)`)
    return message.channel.send(noembed)
}
if (amount > 100) return message.channel.send(`Make Sure The Message Amount Is Between 2 and 100`);
if (amount < 2) return message.channel.send(`Make Sure The Message Amount Is Between 2 and 100 `)
    fetchTranscript(message, amount)
        .then((data) => {
            const file = new MessageAttachment(data, 'transcript.html')
            message.channel.send(file)
        })

    }
}