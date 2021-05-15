//DO EVERYTHING LIKE BELOW TO ADD A COMMAND
module.exports = {
    name: "Command Name Here (this will be the thing that triggers this)",
    description: "This does nothing just add a description",
    aliases: "Add any aliases here, this will be ways to trigger multiple different commands",
    async execute(client, message, args, Discord){ //Does not need to be Async, Async is just to help if you need async statements 
        //ADD CODE HERE
        //Also make sure to add embeds here, just incase they arent recognized
        //You also have client, message, args, Discord definied the variables are at app.js
        //Make sure you save files too when you are doing this
        //Make sure your command trigger matches the file name

        message.channel.send('hi') //I added this on the left so I dont get an error, you can remove when doing it
    }
}

//CODE BELOW WITHOUT LABELS

module.exports = {
    name: "f",
    description: "f",
    
async execute(client, message, args, Discord){

    }
};