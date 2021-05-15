module.exports = {
    name: 'apply',
    description: 'Apply Help',
    execute(client, message, args, Discord){

        const applyembed = new Discord.MessageEmbed()
        .setTitle(`Apply`)
        .setDescription(`**Current Applications:**`)
        .addFields(
            {name: `LEO Application (${process.env.PREFIX}apply-LEO), Make Sure You Have A ticket Open.`, value:`Status: ✅`}
        )
        message.channel.send(applyembed)
    }
}