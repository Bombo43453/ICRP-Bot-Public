  module.exports = {
    name: '8ball',
    description: "8ball duh",
    // permissions:["SPEAK"],
    execute(client, message, args, Discord){
      const questionembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(`${message.author} Please Ask A Full Question `)
      .addFields(
        { name: 'Use The Format Below', value: `${process.env.PREFIX}8ball (message)` }
      )

      if (!args[0]) return message.channel.send(questionembed);
      const question = args.join(" ")

      const eightballreplies = [
        "As I see it, yes.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Don't count on it.",
        "It is certain",
        "My Reply Is No",
        "Yes",
        "Without A Doubt",
        "You May Relay On It",
        "I Think You Should Not Rely On It",
        "Reply Hazy, Try Again",
        "My sources Say No",
        "My Sources Say Yes"
      ];
        const eightball = eightballreplies[Math.floor(Math.random() *eightballreplies.length)]

      const eightballembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(`${message.author.username}`)
      .setThumbnail(`https://i.imgur.com/suDTtV8.jpg`)
      .addFields(
        {name: `Question:`, value: `${question}`, inline: false},
        {name: `Answer`, value: `${eightball}`, inline: false}
      )

        message.reply(eightballembed)
    }
}
