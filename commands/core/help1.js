module.exports = {
    name: `help`,
    aliases: [`commands`, `command`],
    description: `Help`,
async execute(client, message, args, Discord){
const query = args[0];
const Helpembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help')
        .setDescription('Other Commands `\`help fun`\`   `\`help mod`\` `\`help credit`\`')
        .setAuthor(`${process.env.NAME}`, `${process.env.SERVERLOGO}`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: `**${process.env.PREFIX}ping**`, value: 'Shows The Bot Ping', inline: false },
            { name: `**${process.env.PREFIX}help**`, value: 'triggers this embed', inline: false },
            { name: `**${process.env.PREFIX}report**`, value: `Report A Player, Use This In A Ticket`, inline: false },
            { name: `**${process.env.PREFIX}suggest**`, value: `Make A Suggestion`, inline: false},
            { name: `**${process.env.PREFIX}bugreport**`, value: `Report A Bug`, inline: false},
            { name: `**${process.env.PREFIX}status / ${process.env.PREFIX}players**`, value: `Show The Players Online`, inline: false},
            { name: `**${process.env.PREFIX}aop**`, value: `Show The Current AOP`, inline: false},
            { name: `**${process.env.PREFIX}**staff`, value: `Show Current Staff Online`, inline: false},
            { name: `**${process.env.PREFIX}whois**`, value: `Shows Info Of A User`, inline: false},
            { name: `**${process.env.PREFIX}serverinfo**`, value: `Show Server Info`, inline: false},
             
        )
        const helpfunembed = new Discord.MessageEmbed()
        .setTitle(`Fun Commands:`)
        .setColor(`BLUE`)
        .setThumbnail(`${process.env.SERVERLOGO}`)
        .addFields(
            {name: `${process.env.PREFIX}urbandictionary (word)`, value: `Look Up A Word On The Urban Dictionary`, inline: false},
            {name: `${process.env.PREFIX}8ball (query)`, value: `Have an 8ball predict your question`, inline: false},
            {name: `${process.env.PREFIX}pp`, value: `Show your PP Size`, inline: false},
            {name: `${process.env.PREFIX}avatar`, value: `Show A User's Avatar`, inline: false},
            {name: `${process.env.PREFIX}meme`, value: `Show A Meme`},
            {name: `${process.env.PREFIX}cutedog`, value: `Show A Cute Dog/Puppy`, inline: false},
            {name: `${process.env.PREFIX}cutecat`, value: `Show A Cute Cat/Kitten`}

        )
        
if(!query) return message.channel.send(Helpembed);

if(query === ('fun')){
    return message.channel.send(helpfunembed)
    
} else if (query === (`mod`)){
    const noembed = new Discord.MessageEmbed()
        .setTitle(`INVALID PERMISSIONS`)
        .setDescription(`${message.author}, There has been an error`)
        .setFooter(`If you think this was a mistake, make a ticket`)
        message.react(`${process.env.UPVOTE}`);
     if (!message.member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(noembed);
    const helpembed = new Discord.MessageEmbed()
        .setTitle(`Moderation Commands...`)
        .setColor('#0099ff')
	    .setAuthor(`${process.env.NAME}`, `${process.env.SERVERLOGO}`)
	    .setThumbnail(`${process.env.SERVERLOGO}`)
        .setDescription(`${message.author}`)
        .setFooter(`Made By Bombo43453 (B.Mitchell) For ICRP`, `${process.env.SERVERLOGO}`)
        .setTimestamp()
        .addFields(
            {name: `++MODERATION++`, value: `------------------------`, inline: false},
            { name: `**${process.env.PREFIX}say**`, value: 'I Say What You Tell Me Too', inline: false},
            { name: `**${process.env.PREFIX}embed**`, value: 'I Say What You Tell Me Too In An Embed', inline: false},
            {name: `**${process.env.PREFIX}warn (user) (reason)**`, value: `Warn A Player`, inline: false},
            {name: `**${process.env.PREFIX}cease (reason)**`, value: `Use the Cease Command`, inline: false},
            {name: `**${process.env.PREFIX}esc (reason)**`, value: `Escalate A Ticket`, inline: false},
            {name: `**${process.env.PREFIX}ban (player) (reason)**`, value: `Ban A Player`, inline: false},
            {name: `**${process.env.PREFIX}kick (player (reason))**`, value: `Kick A Player`, inline: false},
            {name: `**${process.env.PREFIX}unban (player)**`, value: `Unban A Player`, inline: false},
           // {name: `${process.env.PREFIX}bannedmembers**`, value: `Display The Amount Of Banned Players`, inline: false},
            {name: `**${process.env.PREFIX}purge (message amount)**`, value:`Purge A Message`, inline: false},
            {name: `**${process.env.PREFIX}perms-needed**`, value: `Will Show The Perms Promt And Rename A Ticket`, inline: false},
            {name: `**${process.env.PREFIX}transcript (amount of messages)**`, value: `Will Generate A Transcript`, inline: false},
            {name: `**${process.env.PREFIX}mute (player)**`, value: `mute a user`, inline: false},
            {name: `**${process.env.PREFIX}unmute (player)**`, value: `unmute a user`, inline: false},
            {name: `**${process.env.PREFIX}tempmute (time)**`, value: `Use this for shorter periods (shorter than a day), As bot reset will cause it to reset`, inline: false},
            {name: `++SUGGEST++`, value: `------------------`, inline: false},
            {name: `**${process.env.PREFIX}suggest (suggestion)**`, value: `Make A Suggestion`, inline: false},
            {name: `**${process.env.PREFIX}acceptsuggestion (messageID) (reason)**`, value: `Accept A Suggestion`},
            {name: `**${process.env.PREFIX}denysuggestion (messageID) (reason)**`, value: `Deny A Suggestion`, inline: false},
            {name: `+++Warns+++`, value: `------------------`, inline: false},
            {name: `**${proecess.env.PREFIX}warn (user) (reason)**`, value: `Warn A User`, inline: false},
            {name: `**${proecess.env.PREFIX}warns (user)**`, value: `Check A User's Warnings`, inline: false},
            {name: `**${proecess.env.PREFIX}removewarning (user) (warning number) **`, value: `Remove A User's Warning(s)`, inline: false},
            {name: `**${proecess.env.PREFIX}clearwarnings (user) (reason)**`, value: `Remove All Of A User's Warning(s) (ADMIN + )`, inline: false},

        )

            message.react(`👍`)
            return message.author.send(helpembed);
} else if (query === `credit`){
    const embed = new Discord.MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`CREDIT TO PEOPLE`)
        .setDescription(`This Bot is Open Source, Meaning that You Can Recieve This Code With Sending A DM To The Creator (Will Have all commands but music and commands not made by Bombo43453)`)
        .addFields(
            {name: `I have no friends#6078 (Harry_)`, value: `Helped with changing API to node-fetch`, inline: false},
         //   {name: `discord-tictactoe`, value: `used the API for tictactoe (https://www.npmjs.com/package/discord-tictactoe)`, inline: false},
           // {name: `Grav`, value: `Helped with node-fetch (harry had similar code)`, inline: false},
           {name: `Grav`, value: `Used Him For .staff Command, Helped A Bit Too. I forked a version of his server-status code. `, inline: false},
            {name: `LYON`, value: `I used his message.js style prompt, I have mine modified`, inline: false},
            {name: `Tamir112`, value: `Used Some Of His commands Like ESC, Cease`, inline: false},
            {name: `Txzsi`, value: `Helped me a bit and Is Hosting`, inline: false},
           // {name: `ZerioDev`, value: `Used His Music Bot Commands, github.com/ZerioDev/Music-bot`, inline: false},
            {name: `reconlx`, value: `Helped With mute Commands, and used his npm package (github.com/reconlx)`, inline: false},
            {name: `Discord-FivemAPI & Gamedig & node-fetch`, value: `Helped Make Fivem Status and AOP`, inline: false},
            {name: `++DEVINFO++`, value: `===========`, inline: false},
            {name: `Bombo43453#1901 (B.Mitchell)`, value: `This bot is a bot made by bombo43453#1901. github.com/bombo43453. To recieve access to the commands in this bot, you can DM the owner and will recieve only the commands made by the owner (all but esc, cease, and music commands), If you decide to use this bot, make sure you provide credit like the following: "CREDIT TO BOMBO43453#1901, github.com/bombo43453"`},


        )
        return message.channel.send(embed);
}
    }
}