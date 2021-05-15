
module.exports = {
    name: "aop",
    aliases: ['AOP'],
    description: "Display AOP",

async execute(client, message, args, Discord){
    const Gamedig = require('gamedig');
    Gamedig.query({
        type: 'fivem',
        host: `${process.env.SERVERIP2}`,
        port: `${process.env.SERVERPORT}`
    }).then (async(state) => {
        let aop = state.map.substring(6);
        const aopembed = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/e1mK2jw.png')
        .setColor(`#2dd7e6`)
            .addFields(
                {name: `Current AOP:`, value: `\`\`${aop}\`\``, inline: false}
            )
            message.channel.send(aopembed)
    })
    }
}