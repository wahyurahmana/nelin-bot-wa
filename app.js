const qrcode = require('qrcode-terminal');
const axios = require('axios')
const {
    Client,
    LegacySessionAuth
} = require('whatsapp-web.js');

//scan qr code for login
client.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    });
});

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    authStrategy: new LegacySessionAuth({
        session: sessionData
    })
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

//client sudah login
client.on('ready', () => {
    console.log('Client is ready!');
});

//menerima inputan
client.on('message', message => {
    if (message.body === '-help') {
    message.reply('Hai, Saya Nelin.'+ "\n" +
    'Ada Yang Bisa Nelin Bantu ?Nelin Menerima Perintah :'+ "\n" +
    '*-cuaca <nama_daerah>*');
    } else if (message.body === '-cuaca list-nama-daerah') {
        message.reply('Ini Nama Daerah Yang Bisa Dicek Cuacanya'+ "\n" +
        '*sumbawa*');
    } else if (message.body === '-cuaca sumbawa') {
        axios({
                url: `http://dataservice.accuweather.com/currentconditions/v1/205207?apikey=${process.env.API_KEY_ACCUWEATHER}&language=id-id`
            })
            .then((result) => {
                console.log
                message.reply(`Nelin Mendapatkan Informasi Bahwa Cuacanya ${result.data[0].WeatherText} Dengan Temperature ${result.data[0].Temperature.Metric.Value}${result.data[0].Temperature.Metric.Unit}`)
            })
            .catch((err) => {
                console.log(err)
                message.reply('maaf nelin tidak mengerti')
            })
    } else {
        message.reply('maaf nelin tidak mengerti')
    }
});

client.initialize();