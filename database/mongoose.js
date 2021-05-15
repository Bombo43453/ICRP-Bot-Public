const mongoose = require('mongoose');
require(`dotenv`).config();

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(`ADD DATABSE CONNECTION HERE`, dbOptions);
        mongoose.set(`useFindAndModify`, false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on(`connected`, () => {
            console.log('the bot has connected to the database')
            
        });

        mongoose.connection.on(`disconnected`, () => {
            console.log('the bot has disconnected from the database')
            
        });

        mongoose.connection.on(`err`, () => {
            console.log('There was an error with the connection to the database' + err);
            
        });
    }
}