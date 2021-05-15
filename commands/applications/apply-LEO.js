const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "apply-LEO",
    description: "A Test To the Apply Feature",
    aliases: [`leoapp`, `apply-LeoApplication`, `Leo Application `],
    async execute(client, message, args, Discord){
        if(message.channel.parentID !== `${process.env.TICKETCAT}`) return message.channel.send(`Open A Ticket To Use This Command!`);
        message.channel.send(`Application Started, ${message.author}, check DMS`)
        const questions = [
            "What Department Are You Interested In (SAHP, BCSO, LSPD)",
            "What Is Your Roleplay Name",
            "Do You Have Prior Experience Roleplaying?",
            "What Is RDM?",
            "What Is VDM",
            "What Does RTO Stand For",
            "In your own words, what is FailRP?",
            "What are the general duties of a LEO (Law Enforcement Officer)? Please Answer In detail",
            "In your own words, give us a brief scenario of agressive RP.",
            "In your own words, give us a brief scenario of Passive RP",  
        ];

        let collectCounter = 0;
        let endCounter = 0;

        

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if(collectCounter < questions.length) {
               
                channel.send(questions[collectCounter++])
            } else {
               channel.send("Your Application Has Been Sent")
                collector.stop("fulfilled");
            }
        });

        

        const appsChannel = client.channels.cache.get(`${process.env.APPC}`);
        collector.on("end", (collected, reason) => {
            if (reason === "fulfilled") {
                let index = 1;
                const mappedResponses = collected.map((msg) => {
                    return `${index++} ${questions[endCounter++]}\n \`-> ${msg.content}\``
                }).join("\n\n");


                const sentembed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
                .setTitle("Filled LEO Application")
                .setDescription(mappedResponses)
                .setColor("BLUE")
                .setTimestamp()
               // const response = getLongStrong();;
                if(mappedResponses.length >= 2048) {
                    const ly = Discord.Util.splitMessage(mappedResponses, {
                        maxLength: 1024,
                        char: '\n',
                        prepend: '',
                        apend: '',
                    })
                    sentembed.setDescription(ly.shift());
                    ly.forEach((i) => sentembed.addField('\u200B', i));
                }
                else {
                    sentembed.setDescription(mappedResponses)
                }
                message.channel.send(sentembed)
            }
        });
      

    },
};