const qrcode = require('qrcode-terminal');
const axios = require('axios')
const {
    Client
} = require('whatsapp-web.js');
const client = new Client();

//scan qr code for login
client.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    });
});

//client sudah login
client.on('ready', () => {
    console.log('Client is ready!');
});

//menerima inputan
client.on('message', message => {
    if (message.body === '-help') {
        message.reply('Hai, Saya Nelin.'+'\n'+
        'Ada Yang Bisa Nelin Bantu ?'+'\n'+
        'Nelin Menerima Perintah : '+'\n'+
        '*-cuaca <nama_daerah>*'+'\n'+
        '*-gempa*')
    } else if (message.body === '-cuaca list-nama-daerah') {
        message.reply('Ini Nama Daerah Yang Bisa Dicek Cuacanya'+'\n'+
        '*sumbawa*')
    } else if (message.body === '-cuaca sumbawa') {
        axios({
                url: 'http://dataservice.accuweather.com/currentconditions/v1/205207?apikey='+`${process.env.API_KEY_ACCUWEATHER}`+'&language=id-id'
            })
            .then((result) => {
                console.log
                message.reply(`Nelin Mendapatkan Informasi Bahwa Cuacanya ${result.data[0].WeatherText} Dengan Temperature ${result.data[0].Temperature.Metric.Value}${result.data[0].Temperature.Metric.Unit}`)
            })
            .catch((err) => {
                console.log(err)
                message.reply('maaf nelin tidak mengerti')
            })
    } else if (message.body === '-gempa') {
        axios({
                url: "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
                method: 'GET'
            })
            .then((result) => {
                message.reply('Nelin Dapat Info Bahwa: '+"\n"+
                result.data.Infogempa.gempa.Wilayah+"\n"+
                'Dengan Potensi: '+result.data.Infogempa.gempa.Potensi+"\n"+
                'Pada Tanggal: '+result.data.Infogempa.gempa.Tanggal+"\n"+
                'Jam: '+result.data.Infogempa.gempa.Jam+"\n"+
                'Magnitudo: '+result.data.Infogempa.gempa.Magnitude+"\n"+
                'Kedalaman: '+result.data.Infogempa.gempa.Kedalaman+"\n")
            }).catch((err) => {

            });
    } else {
        message.reply('maaf nelin tidak mengerti')
    }
});

client.initialize();