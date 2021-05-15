
module.exports = {
    name: "ban",
    description: "Ban A Member",
    async execute(client, message, args, Discord){
        if(!message.member.permissions.has(`${process.env.BANPERM}`)) return message.channel.send(`You Don't Have Permissions!!!!!`);

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       // if (message.mentions.users.first() === `581584824326684672` || `533036968884568065` || `317748198158630913`) return message.channel.send(`Cmon you tried to ban a director!!!`);
        if (!member) return message.channel.send(`You Must Mention A Member ${process.env.PREFIX}ban (User) (reason)`).then (msg => msg.delete({timeout:3000}));

        if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`You Can't Punish Because You Either Have The Same Role Or Your Role Is Lower Than The Person You Are Trying To Ban`);
        const reason = args.slice(1).join(" ") || "No Reason Provided";

        //PUBLIC MESSAGE BELOW
        const banembed = new Discord.MessageEmbed()
        .setTitle('Banned Member')
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .setDescription(`Banned By: ${message.author}`)
        .setColor(`RED`)
        .setTimestamp()
        .addFields(
            {name: `Banned Member:`, value: `${member}`, inline: false},
            {name: `Reason:`, value: `${reason}`, inline: false }
        )
        
        //LOG MESSAGE
        const logembed = new Discord.MessageEmbed()
        .setTitle(`MEMBER BANNED`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .setColor(`RED`)
        .setDescription(`Banned By: ${message.author}`)
        .addFields(
            {name: `Member Banned:`, value: `${member}`, inline: false},
            {name: `Reason:`, value: `${reason}`, inline: false}
        )
            
        //DM MESSAGE
        const DMmessage = new Discord.MessageEmbed()
        .setTitle(`You Have Been Banned`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .setColor(`RED`)
        .addFields(
            {name: `Banned By:`, value: `${message.author}`, inline: false},
            {name: `Reason:`, value: `${reason}`, inline: false},
            {name: `APPEAL HERE:`, value: `${process.env.APPEALDISCORD}`, inline: false}
        )


        if(member){
        
            member.send(DMmessage)
            message.channel.send(`Processing...`)
            setTimeout(function(){ 
                message.delete()
                member.ban({ reason })
                message.channel.send(banembed);
                client.channels.cache.get(`${process.env.LOG}`).send(logembed);
                require('log-timestamp');
                console.log(`MEMBER BANNED
BANNED BY: ${message.author.tag}
REASON: ${reason}
MEMBER BANNED: ${member}`)
             }, 2500);
            
        }else{
            channel.send(`${message.author}, Cannot Ban that Member`)
        }
          
    }
}