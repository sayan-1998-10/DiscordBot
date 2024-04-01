const { Events } = require("discord.js");
const { commands } = require("../build-commands");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client){
        client.commands = commands;
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }

}