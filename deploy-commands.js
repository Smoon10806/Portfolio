const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId = '956948114978254848';
const guildId = '973790641546997791';

const commands = [
    new SlashCommandBuilder().setName('madeby').setDescription('제작자'),
    new SlashCommandBuilder().setName('급식').setDescription('상문고등학교 오늘의 급식')
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('성공'))
    .catch(console.error);