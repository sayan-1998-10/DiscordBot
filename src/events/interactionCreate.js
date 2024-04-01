const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction){
        if(!interaction.isChatInputCommand()){
            return;
        }

        const command = interaction.client.commands.get(interaction.commandName);
        
        if(!command){
            console.error("No command matching name - ", interaction.commandName);
            return;
        }

        try{
            await command.execute(interaction);
        } catch(err){
            console.error(err);
        }
        


    }
}