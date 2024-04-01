//slash command using options and choices

const {
  SlashCommandBuilder,
  ApplicationCommandOptionType,
  SlashCommandNumberOption,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Add two numbers")
    .addNumberOption(
      new SlashCommandNumberOption()
        .setName("first-number")
        .setDescription("Enter First Number")
        .setRequired(true)
        .setMaxValue(100)
        .setChoices(
          {
            name: "1",
            value: 1,
          },
          {
            name: "2",
            value: 1,
          }
        )
    )
    .addNumberOption(
      new SlashCommandNumberOption()
        .setName("second-number")
        .setDescription("Enter Second Number")
        .setRequired(true)
        .setMaxValue(100)
    ),

  async execute(interaction) {
    const firstNumber = interaction.options.get("first-number").value;
    const secondNumber = interaction.options.get("second-number").value;

    await interaction.reply(
      `The sum of these numbers is ${firstNumber + secondNumber}`
    );
  },
};
