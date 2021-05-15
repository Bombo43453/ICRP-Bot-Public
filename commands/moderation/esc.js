const { TeamMember, Channel } = require("discord.js")

module.exports = {
    name: "esc",
    description: "Escilate A Ticket",
async execute(client, message, args, Discord){
    const { guild } = message
        const reason = args.join(" ") || `No Reason Provided`;
        if(message.channel.parentID !== `${process.env.TICKETCAT}`) return message.channel.send(`Open A Ticket To Use This Command!`);
        if(!message.member.permissions.has(`MANAGE_NICKNAMES`)) return message.channel.send(`Make Sure You Are At Least Support Team To Use This.`);

        let roles = message.guild.roles;
        let staffteam = roles.cache.find(r => r.id === (`${process.env.STAFFTEAM}`));
        let supportteam = roles.cache.find(r => r.id === (`${process.env.SUPPORTTEAM}`));
        let management = roles.cache.find(r => r.id === (`${process.env.MANAGEMENT}`));
        message.channel.updateOverwrite(staffteam, { VIEW_CHANNEL: false});
        message.channel.updateOverwrite(supportteam, { VIEW_CHANNEL: false});
        message.channel.updateOverwrite(management, {VIEW_CHANNEL: false});

        const embed = new Discord.MessageEmbed()
        .setColor(`#25e4ef`)
        .addField('**<:tick:815479113632317500> This ticket has been escalated to:**',' <@&813395369383690270> &  <@&814209009208131644>', true)
        message.channel.send(embed)
        
        const embed1 = new Discord.MessageEmbed()
            .setThumbnail(`${process.env.SERVERLOGO}`)
            .setColor("#25e4ef")
            .addField('LOG:', `A Ticket was Escalated`, false)
            .addField(`Staff Member:`,`\`\`${message.author.tag}\`\``, true)
            .addField(`ticket:`, `<#${message.channel.id}>`, true)
            .addField(`Reason:`, `${reason}`, false)
            

            client.channels.cache.get(`${process.env.LOG}`).send(embed1);
    }
}