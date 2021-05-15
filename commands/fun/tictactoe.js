const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })
module.exports = {
    name: `tictactoe`,
    aliases: [`tictac`, `tictactoe`],
    description: `Tic Tac Doe Duh`,
async execute(client, message, args, Discord){
    game.handleMessage(message);
    }
}