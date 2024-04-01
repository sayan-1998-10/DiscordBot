const { SlashCommandBuilder} = require('discord.js')


module.exports = {
    data : new SlashCommandBuilder()
            .setName('server')
            .setDescription('Get server Info'),
    async execute(interaction){
        await interaction.reply(`The server"s name is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`);
    }
}