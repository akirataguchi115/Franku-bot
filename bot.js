const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message', msg => {
    if (msg.content.substring(0, 6) == 'Franku') {
        split = msg.content.split(' ');
        switch (split[1]) {
            case 'oglevel':
                const request = require('request');
                request('https://www.habbo.fi/api/public/users?name=mag123love', function (err, res, body) {
                    console.log(body);
                });
                return;
            default: msg.reply('Hmm...taisit kutsua minua väärin. Koita ```Franku apuva``` (tai käy uudestaan peruskoulu)');
        }
    }

});

client.login(auth.token);