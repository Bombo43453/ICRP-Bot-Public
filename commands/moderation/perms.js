
module.exports = {
    name: `perms-needed`,
    aliases: [`perms`, 'perms-need', 'needed-perms', 'role-perms', 'perm'],
    description: `Show The Perms and Change The Channel Name`,
async execute(client, message, args, Discord){
    if(message.channel.parentID !== `${process.env.TICKETCAT}`) return message.channel.send(`Open A Ticket To Use This Command!`);
    message.delete();
    if(message.channel.id ===(`815713643031167017`)) return message.channel.send(`Make sure This Is Done In A Ticket`);
    if(message.channel.id ===(`815713610563059783`)) return message.channel.send(`Make sure This Is Done In A Ticket`);
    if(message.channel.id ===(`816459135217303563`)) return message.channel.send(`Make sure This Is Done In A Ticket`);
    if(message.channel.id ===(`814207699007832126`)) return message.channel.send(`Make sure This Is Done In A Ticket`);
    if(message.channel.id ===(`839338948479156256`)) return message.channel.send(`Make sure This Is Done In A Ticket`);

    // || `815713610563059783` || `816459135217303563` || `814207699007832126`)
    const embed = new Discord.MessageEmbed()
        .setTitle(`Please List The Following`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            {name: `Name: (esx name)`, value: `**Department:**`},
            {name: `Rank:`, value: `\`This Will Be Done Soon\``}
        )
        message.channel.send(embed)
        message.channel.setName("perms-needed")
            .catch(console.error)
    }
}



