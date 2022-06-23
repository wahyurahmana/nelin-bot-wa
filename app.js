const qrcode = require('qrcode-terminal');
const axios = require('axios')
const { Client } = require('whatsapp-web.js');
const client = new Client();

//scan qr code for login
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//client sudah login
client.on('ready', () => {
    console.log('Client is ready!');
});

//menerima inputan
client.on('message', message => {
    if(message.body === '-help') {

message.reply(`Hai, Saya Nelin.
Ada Yang Bisa Nelin Bantu ?
Nelin Menerima Perintah : 
*-cuaca <nama_daerah>*`);

    }else if (message.body === '-cuaca list-nama-daerah'){
message.reply(`Ini Nama Daerah Yang Bisa Dicek Cuacanya
*sumbawa*
`)
    }else if (message.body === '-cuaca sumbawa'){
        axios({
            url : `http://dataservice.accuweather.com/currentconditions/v1/205207?apikey=${process.env.API_KEY_ACCUWEATHER}&language=id-id`
        })
            .then(({data}) => {
                message.reply(`Nelin Mendapatkan Informasi Bahwa Cuacanya ${data[0].WeatherText} Dengan Temperature ${data[0].Temperature.Metric.Value}${data[0].Temperature.Metric.Unit}`)
            })
            .catch(err => message.reply('maaf nelin tidak mengerti'))
    }

    else{
        message.reply('maaf nelin tidak mengerti')
    }
});

client.initialize();