require("dotenv").config();
const { REST, Routes, Collection } = require("discord.js");
const { commands } = require("./build-commands");
const rest = new REST({ version: 10 }).setToken(process.env.token);


/*
    Deployment script to register new commands or existing commands when names/description changes
    Run this script manually once when required.
*/

let commandList = [];
if (commands.size > 0) {
  //converting the list of SlashBuilderCommands data to JSON
  commandList = commands.map((cmd) => cmd.data.toJSON());
  console.log("Commands", commandList);
}

if (commandList.length > 0) {
  (async () => {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commandList }
    );
  })();
}
