const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    client.user.setActivity('버그와 싸우기' )
    console.log('ready');
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'madeby'){
        await interaction.reply('https://github.com/Smoon10806 , 박재혁#5884');
    }


});

client.login(process.env.TOKEN);