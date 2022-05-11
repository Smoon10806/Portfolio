const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
    client.user.setActivity('응애 나 애기 코더' )
    console.log('ready');

});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'madeby'){
        await interaction.reply('https://github.com/Smoon10806 , 박재혁#5884');
    }

    if (commandName === '급식'){
        //var lunch = school.getMealInfo(2022, 1);
        await interaction.reply(/*lunch()*/);
    }
});


client.login(process.env.TOKEN);