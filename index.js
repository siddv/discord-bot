require('dotenv').config();

const Discord = require('discord.js');
const responses = require('./modules/responses');

const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content.substring(0,2) === '!s') {
    const messageText = msg.content.substring(2, msg.content.length)

    if(typeof responses[messageText] == 'function') {

      responses[messageText](msg);

    }

  } 
});

client.login(process.env.DISCORD_TOKEN);