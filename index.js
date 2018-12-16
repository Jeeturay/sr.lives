const Discord = require('discord.js');

const bot = new Dicord.Client();

bot.on('message', (message) => {
	if(message.content == 'Hi') {
		message.reply('I AM RITESH THIS SERVER OPERATOR..! I CAN HELP YOU..!')
 }
});

bot.login('NTExNTcwODI3MzA1NTQ5ODI1.DvS9IA.TaPvoYyP9711NJDDXtF0FOJpxq0');