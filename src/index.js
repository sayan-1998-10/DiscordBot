require("dotenv").config();
const fs = require('fs');
const path = require('path');

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.login(process.env.token);

// Register events
const eventsFolder = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsFolder);

for(eventFile of eventFiles){
    const eventFilePath = path.join(eventsFolder, eventFile);
    const event = require(eventFilePath);
    if(event.once){
        client.once(event.name, (...args) => event.execute(...args));
    }else{
        client.on(event.name, (...args) => event.execute(...args));
    }
}