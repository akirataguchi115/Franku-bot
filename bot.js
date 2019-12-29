const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message', msg => {
    if (msg.content.substring(0, 6) == 'Franku') {
        split = msg.content.split(' ');
        switch (split[1]) {
            case 'oglevel':
                const options = {
                    url: 'https://www.habbo.fi/api/public/users?name=mag123love',
                    method: 'GET'
                };

                request(options, function (err, res, body) {
                    let json = JSON.parse(body);
                    console.log(json);
                });
                return;
            default: msg.reply('Hmm...taisit kutsua minua väärin. Koita ```Franku apuva``` (tai käy uudestaan peruskoulu)');
        }
    }

});

client.login(auth.token);