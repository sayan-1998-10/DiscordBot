const { SlashCommandBuilder} = require('discord.js')


module.exports = {
    data : new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Testing the slash command feature!'),
    async execute(interaction){
        await interaction.reply('pong');
    }
}