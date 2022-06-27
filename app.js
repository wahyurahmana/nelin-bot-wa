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
        '*-cuaca list-nama-daerah*'+'\n'+
        '*-cuaca <nama_provinsi>*'+'\n'+
        '*-gempa*')
    } else if (message.body === '-cuaca list-nama-daerah') {
        message.reply('Ini Nama Daerah Yang Bisa Dicek Cuacanya'+'\n'+
        '*sumbawa*')
    } else if (message.body === '-cekcuaca ntb') {
        axios({
                url: 'http://18.141.223.254:5000/ntb'
            })
            .then(({data}) => {
                let str = ""
                data.area.forEach(el => {
                    let i = `Daerah : ${el.daerah}, cuaca hari ini : ${el.cuaca.hariIni}, cuaca besok : ${el.cuaca.besok} dan cuaca lusa : ${el.cuaca.lusa}, ini prediksi pada jam 6 sore ya kak, hanya prediksi loh ya \n\n`
                    str += i
                });
                message.reply(str)
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