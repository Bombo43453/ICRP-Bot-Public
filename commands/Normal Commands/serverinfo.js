
const moment = require(`moment`);
module.exports = {
    name: `serverinfo`,
    aliases: [`info`, `server`],
    description: `Display Server Info`,
async execute(client, message, args, Discord){
    const guild = message.guild;
    const embed = new Discord.MessageEmbed()
        .setTitle(`${guild.name}'s Info`)
        .setThumbnail(guild.iconURL())
        .setColor(`BLUE`)
        .addField(`General Info`, [
            `ID: ${guild.id}`,
            `Name: ${guild.name}`,
            `Owner: ${guild.owner}`,
        ])
        .addField(`Counts`, [
            `Role: ${guild.roles.cache.size} roles`,
            `Channels: ${
                guild.channels.cache.size
            }`,
            `Emojis: ${guild.emojis.cache.size || `0`}`
        ])
        .addField(`Additional Information`, [
            `Created: ${moment(guild.createdTimestamp).format(`LT`)} ${moment(guild.createdTimestamp).format(`LL`)} ${moment(
                guild.createdTimestamp
                ).fromNow()}`,
                `Region: ${guild.region}`,
                `Boost Tier: ${guild.premiumTier ? Tier `${guild.premiumTier}`: `None`
            }`,
            `Boost Count: ${guild.permiumSubscriptionCount || '0'}`,
        ])
        message.channel.send(embed);
    }
}