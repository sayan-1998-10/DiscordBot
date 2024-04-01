const { Events, bold, italic, strikethrough, codeBlock, spoiler, hideLinkEmbed, hyperlink, inlineCode, time } = require("discord.js");


module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message){
        if(message.author.bot){
            return;
        }

        if(['hello','hi','ola'].includes(message.content)){
            message.reply(spoiler("Hi there!"));
        }

        if(message.content === 'link'){
            let link = 'https://discord.js.org/'
            message.reply(hyperlink('Discord.js',link))
        }


        if(message.content  === 'code'){
            const jsCode = "String age = 'sayan' ";
            const inline = inlineCode(jsCode);
            const codeblock = codeBlock('java',jsCode);
            message.reply(time(Date.now()));
        }
    }

}