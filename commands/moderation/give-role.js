

module.exports = {
    name: `give-role`,
    aliases: [`role`, `giverole`, 'derole', 'removerole', 'remove-role', 'give-role'],
    description: `Give A Role`,
async execute(client, message, args, Discord){                                                  //LSPD ONE BELOW
   //if(message.channel.parentID !== `827205875495993344` || message.channel.parentID !== `${process.env.TICKETCAT}` || message.channel.parentID !== `834681528637718528` || message.channel.parentID !== `833841837516390401`) 
   // if(message.channel.parentID !== (`${process.env.TICKETCAT}`) || (`833841837516390401`)) return message.channel.send(`Open A Ticket To Use This Command!`);
    if(!message.member.permissions.has(`MANAGE_NICKNAMES`)) return message.channel.send(`You Don't Have Permissions!!!!!`);
   // if(!message.member.permissions.has(`${process.env.BANPERM}`)) return message.channel.send(`You Don't Have Permissions!!!!!`);
try {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

    const adminembed = new Discord.MessageEmbed()
        .setTitle(`This Role Can't Be Given`)
        .setDescription(`This role has Admin Permissions, Please ask Someone With Admin Permissions To Do this`)
        .setColor(`BLUE`)
        .setTimestamp()
        .setThumbnail(`${process.env.SERVERLOGO}`)
    if(roleName.permissions.has(`ADMINISTRATOR`)) return message.channel.send(adminembed);
    if(roleName.permissions.has(`BAN_MEMBERS`)) return message.channel.send(adminembed);
    if(roleName.permissions.has(`KICK_MEMBERS`)) return message.channel.send(adminembed);
    //Banned Roles To Add Below
    const notperm = new Discord.MessageEmbed()
        .setTitle(`Cannot Give This Role`)
        .setDescription(`This Role Is not permitted to be given, please ask someone with administrator permissions to do this`)
        .setFooter(`All Roles With Ban Members, Kick Members, And Admin Apply`)
        .setColor(`BLUE`)
        .setTimestamp()
        .setThumbnail(`${process.env.SERVERLOGO}`)
   if(roleName.id === (`838899165756915722`)) return message.channel.send(notperm);
   if(roleName.id === (`839594141507518464`)) return message.channel.send(notperm);
   if(roleName.id === (`814208569972621343`)) return message.channel.send(notperm);
   if(roleName.id === (`832304692980744192`)) return message.channel.send(notperm);

   if(roleName.id === (`839594692609048577`)) return message.channel.send(notperm);
   if(roleName.id === (`838899165756915722`)) return message.channel.send(notperm);
   if(roleName.id === (`839588108387614761`)) return message.channel.send(notperm);
   if(roleName.id === (`814208569972621343`)) return message.channel.send(notperm);
   if(roleName.id === (`838899165756915722`)) return message.channel.send(notperm);

    const alreadyHasRole = member._roles.includes(roleName.id);
    

    const removeEmbed = new Discord.MessageEmbed()
        .setTitle(`Role Removed`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            {name: `Roled By:`, value: `${message.author}`, inline: true},
            {name: `Roled User: `, value: `${member.user}`, inline: true},
            {name: `Role Removed: `, value: `${roleName}`, inline: true},
        )
    
    const logEmbed2 = new Discord.MessageEmbed()
        .setTitle(`Role Removed`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            {name: `Roled By:`, value: `${message.author}`, inline: true},
            {name: `Roled User:`, value: `${member.user}`, inline: true},
            {name: `Role Removed:`, value: `${roleName}`, inline: true}
        )
        
    if(alreadyHasRole) {
    member.roles.remove(roleName).then(() => message.channel.send(removeEmbed))
    client.channels.cache.get(`${process.env.MSGLOG}`).send(logEmbed2);
    return;

    } 

    const embed = new Discord.MessageEmbed()
        .setTitle(`Role Given`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .setTimestamp()
        .addFields(
            {name: `Roled User:`, value: `${member.user}`, inline: true},
            {name: `Roled by: `, value: `${message.author}`, inline: true},
            {name: `Role Given:`, value: `${roleName}`, inline: true}
        )

    const logEmbed = new Discord.MessageEmbed()
        .setTitle(`Role Given`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            {name: `Roled Member:`, value: `${member.user}`, inline: true},
            {name: `Roled By:`, value: `${message.author}`, inline: true},
            {name: `Role Given:`, value: `${roleName}`, inline: true},
        )
            
        member.roles.add(roleName).then(() => message.channel.send(embed));
        client.channels.cache.get(`${process.env.MSGLOG}`).send(logEmbed);
}catch (e) {
    console.log(e);
    return message.author.send(`There has been an error with the role, make sure you spelled it right.`).then(message.delete({ timeout: 1000}));

}
    }
}