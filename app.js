const qrcode = require('qrcode-terminal');

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
    }else{
        message.reply('maaf nelin tidak mengerti')
    }
});

client.initialize();