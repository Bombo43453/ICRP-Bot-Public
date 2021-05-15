 
 module.exports = {
    name: 'ppsize',
    aliases: ['pp'],
    description: "shows ppsize",
    execute(client, message, args, Discord){
      const ppsize = [
        "8------o",
        "No PP U Female",
        "8--o",
        "8---------------o",
        "8-----o",
        "8-------------------------------o (very big)",
        "8----------o",
        "8----------------------------------------------------------------0 is this possible?",
        "Im Telling Txzsi",
        "8=====================================================================D"
      ]
        const ppsizes = ppsize[Math.floor(Math.random() *ppsize.length)]
        
        const ppembed = new Discord.MessageEmbed()
        .setColor(`#0099ff`)
        .setDescription(`Hey,${message.author} your PP Size Is: ${ppsizes}`)

        const userembed = new Discord.MessageEmbed()
        .setColor(`#0099ff`)
        .setDescription(`${message.mentions.users.first()}'s PPsize is ${ppsizes}`)

        if (!message.mentions.users.first()) return message.channel.send(ppembed);
        message.channel.send(userembed)
       
        
    }
}
