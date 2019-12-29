const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message', msg => {
    if (msg.content.substring(0, 6) == 'Franku') {
        split = msg.content.split(' ');
        switch (split[1]) {
            case 'oglevel':
                if (split[2] == undefined) {
                    msg.reply('Hmm...taisit kutsua minua väärin.' +
                        'Koita `Franku apuva` (tai käy uudestaan peruskoulu)');
                    return;
                }
                const options = {
                    url: 'https://www.habbo.fi/api/public/users?name=' + split[2],
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Accept-Charset': 'utf-8',
                        'User-Agent': 'HABBO client'
                    }
                };
                var error = false;
                request(options, function (err, res, body) {
                    let json = JSON.parse(body);
                    if (typeof json.memberSince != 'undefined') {
                        msg.reply('Henkilön ' + split[2] + ' tili on tehty tällöin: ' + json.memberSince);
                    } else {
                        msg.reply('Hmm...taisit kutsua minua väärin.' +
                            'Koita `Franku apuva` (tai käy uudestaan peruskoulu)');
                    }
                });
                return
            case 'apuva':
                msg.reply('haha nobo eiku\nKomentoni ovat:\n' +
                    '`Franku apuva` - >rekursio syvenee hehe\n' +
                    '`Franku oglevel <henkilön_id>` - Kertoo käyttäjän OG levelin/tilin iän');
                return;
            default: msg.reply('Hmm...taisit kutsua minua väärin.' +
                'Koita `Franku apuva` (tai käy uudestaan peruskoulu)');
        }
    }
});

client.login(auth.token);