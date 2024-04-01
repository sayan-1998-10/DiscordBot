const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

// Init empty Discord Collection
commands = new Collection();

// Reads the slash command utilites
const utilityFolder = path.join(__dirname, "commands/utility");
const utiliyFiles = fs.readdirSync(utilityFolder);

for (const file of utiliyFiles) {
  const filePath = path.join(utilityFolder, file);
  const command = require(filePath);

  if ("data" in command && "execute" in command) {
    commands.set(command.data.name, command);
  } else {
    console.error(
      `Utility command does not have name or execute in file ${file} !`
    );
  }
}

module.exports = {
  commands,
};
