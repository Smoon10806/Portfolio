const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const neis = require("neis");
const school = neis.createSchool(neis.REGION.SEOUL, "B100000452", neis.TYPE.HIGH);
var today = new Date();
var day = ('0' + today.getDate()).slice(-2);
var month = ('0' + (today.getMonth() + 1)).slice(-2);

function getTodayLabel() {
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    var today = new Date().getDay();
    var todayLabel = week[today];
    return todayLabel;
}

function gettodaymeal() {
    school.getMeal(2022, 5).then(d => {
        var n = day;
        console.log("오늘의 급식 : " + "\n" + d[n].lunch + "\n");
    });
}


const exampleEmbed = new MessageEmbed()
    .setTitle("상문고등학교")
    .setColor('0f4c81')
    .setDescription("오늘은" + month + "월" + day + "일 입니다")
    .addFields(
        { name: '오늘의급식은', value: '' },
    );

client.once('ready', () => {
    var tod = getTodayLabel();
    client.user.setActivity('버그와 싸우기' )
    console.log('ready');
    console.log(tod);
    gettodaymeal()
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'madeby'){
        await interaction.reply('https://github.com/Smoon10806 , 박재혁#5884');
    }

    if (commandName === '급식'){
        await interaction.reply({ embeds: [exampleEmbed] });
    }

});

client.login(process.env.TOKEN);