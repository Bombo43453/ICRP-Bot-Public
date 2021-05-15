const { Channel } = require("discord.js")

module.exports = {
    name:"report",
    description:"report a player",

    execute(client, message, args, Discord){
        if(message.channel.parentID !== `${process.env.TICKETCAT}`) return message.channel.send(`Open A Ticket To Use This Command!`);
        message.delete();
        const reportembed = new Discord.MessageEmbed()
        .setTitle(`REPORT A PLAYER`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .setColor(`BLUE`)
        // .setAuthor(`IF YOU HAVE NOT OPENED A TICKET, OPEN ONE NOW`)
        .setDescription(`Use The Following Format:`)
        .addFields(
            { name: `Name:`, value: `**Where This Happened:**`},
            { name: `Report On: (Player Username In Game And Discord)`, value: `**REASON:**`},
            { name: "Proof: (add any clips or screenshots)", value: `**Witnesses: (add if there are any witnesses to this report.)**` },
        )

        message.channel.send(reportembed)
    }
}