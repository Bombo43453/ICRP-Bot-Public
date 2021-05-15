module.exports = {
    name: "cease",
    description: "Cease A Conversation",
    async execute(client, message, args, Discord){
        message.delete();
        const reason = args.join(" ") || `No Reason Provided`;
        const noembed = new Discord.MessageEmbed()
        .setTitle('ERROR')
        .setDescription(`${message.author}, You Are Missing Permissions`)
        .setFooter(`If You Think This Is A Mistake Contact A Developer (B.Mitchell)`)



        if (!message.member.hasPermission(`${process.env.AUTH}`)) return message.channel.send(noembed);
        if (!args[0]) return message.channel.send(`You Must Enter A Reason Usage: ${process.env.PREFIX}cease (reason)`).then (msg => msg.delete({timeout:3000}));


        message.channel.send(`:warning: ALERT: A CEASE LINE HAS BEEN CALLED!
        ==============
        Cease Your Conversation!
        ==============
        (aka. Stop discussing the topic and move on or expect a mute) `)

        const logembed = new Discord.MessageEmbed()
        .setColor("#25e4ef")
        .setTitle("A Cease line Was Called")
        .addField(`Staff Member:`, `${message.author.tag}`, false )
        .addField(`Channel:`, `<#${message.channel.id}>`, false)
        .addField(`Reason:`, `${reason}`, false)

        client.channels.cache.get(`${process.env.LOG}`).send(logembed)
        

        
    },
};
