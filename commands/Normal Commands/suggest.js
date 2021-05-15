const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "suggest",
    description: "make a suggestion",
async execute(client, message, args, Discord){
    const suggestionQuery = args.join(" ")
    if(!suggestionQuery) return message.reply(' Please Specify A Suggestion!')
        const embed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
            .setDescription(`**Suggestion:** ${suggestionQuery}`)
            .setColor('ORANGE')
            .setTimestamp()
            .addField("Status", 'PENDING')

            message.channel.send('Submitted Suggestion Check <#832341169236213810>') // THE ID IS THE SUGGESTION CHANNEL CHANGE THAT 
            message.guild.channels.cache.get(`${process.env.SUGGEST}`).send(embed).then(message => {
                message.react(`${process.env.UPVOTE}`)
                    .then(() => {
                        message.react(`${process.env.DOWNVOTE}`)
                    })
            });
    },
};


//       channel.send(workPls)
//         .then(message => {
//           message.react('<:upvote:818457585044029461>')
//             .then(() => {
//                 message.react('<:downvote:818457639125647370>') 