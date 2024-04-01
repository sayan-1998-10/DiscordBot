const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js")

module.exports = {
    data : new SlashCommandBuilder()
                .setName('demo-embed')
                .setDescription('Demo Embed'),
    async execute(interaction){
        const embed = new EmbedBuilder();
        const footerImgFile    = new AttachmentBuilder("/Users/sayansaha/projects/DiscordBot/src/assets/footer-icon.avif", {name : 'footer-icon.avif'} );
        const thumbnailImgFile = new AttachmentBuilder("/Users/sayansaha/projects/DiscordBot/src/assets/thumbnail.webp", {name: 'thumbnail.webp'} );

        embed
            .setTitle("Demo Embed")
            .setDescription("Dummy Embed Description")
            .setURL("https://www.youtube.com")
            .setAuthor({
                name: interaction.user.username,
            })
            .setColor(0x0099FF)
            .setFooter({
                 text : "YOLO",
                iconURL : `attachment://${footerImgFile.name}`
            })
            .setTimestamp(Date.now())
            .setImage(`attachment://${thumbnailImgFile.name}`)
            .addFields(
                {name: 'Field 1', value: 'Field 1 Value'},
                {name: '\u200b', value: '\u200b'},
                {name: 'Field 2', value: 'Field 2 Value', inline: true},
                {name: 'Field 3', value: 'Field 3 Value', inline: true}
            )


        try{
            await interaction.channel.send({embeds : [embed], files: [footerImgFile, thumbnailImgFile]})
        }
        catch(err){
            console.log("eeoe", err)
        }
        
    }

}