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

var meal =  school.getMeal(2022, 5).then(d => {
    var n = day;
    var tod = getTodayLabel();
    if (tod = "토요일", "일요일") {
        console.log("오늘의 급식은 당신이 만드는군요!");
    }
    else {
        console.log("오늘의 급식 : " + "\n" +
            d[n].lunch + "\n"
        );
    }
});

const exampleEmbed = new MessageEmbed()
    .setTitle("오늘의 급식")
    .setColor('0f4c81')
    .setDescription("오늘은" + month + "월" + day + "일 입니다")
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    );

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
        await interaction.reply({ embeds: [exampleEmbed] });
    }
});


client.login(process.env.TOKEN);