const listNamaProvinsi = require('./helpers/list-nama-provinsi.js')
const listkurir = require('./helpers/list-kurir.js')
const cekResi = require('./helpers/cek-resi.js');
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
client.on('message', async (message) => {
    try {
        if (message.body === '-help') {
            message.reply('Hai, Saya Nelin.'+'\n'+
            'Ada Yang Bisa Nelin Bantu ?'+'\n'+
            'Nelin Menerima Perintah : '+'\n'+
            '*-cuaca list-nama-provinsi*'+'\n'+
            '*-cekcuaca <nama_provinsi>*'+'\n'+
            '*-gempa*')
        } else if (message.body === '-cuaca list-nama-provinsi') {
            message.reply('Ini Nama Daerah Yang Bisa Dicek Cuacanya'+'\n'+
            '*aceh*'+'\n'+
            '*bali*'+'\n'+
            '*bangka-belitung*'+'\n'+
            '*banten*'+'\n'+
            '*bengkulu*'+'\n'+
            '*yogyakarta*'+'\n'+
            '*dki-jakarta*'+'\n'+
            '*gorontalo*'+'\n'+
            '*jambi*'+'\n'+
            '*jawa-barat*'+'\n'+
            '*jawa-tengah*'+'\n'+
            '*jawa-timur*'+'\n'+
            '*kalimantan-barat*'+'\n'+
            '*kalimantan-selatan*'+'\n'+
            '*kalimantan-tengah*'+'\n'+
            '*kalimantan-timur*'+'\n'+
            '*kalimantan-utara*'+'\n'+
            '*kepulauan-riau*'+'\n'+
            '*lampung*'+'\n'+
            '*maluku*'+'\n'+
            '*maluku-utara*'+'\n'+
            '*ntb*'+'\n'+
            '*ntt*'+'\n'+
            '*papua*'+'\n'+
            '*papua-barat*'+'\n'+
            '*riau*'+'\n'+
            '*sulawesi-barat*'+'\n'+
            '*sulawesi-selatan*'+'\n'+
            '*sulawesi-tengah*'+'\n'+
            '*sulawesi-tenggara*'+'\n'+
            '*sulawesi-utara*'+'\n'+
            '*sumatera-barat*'+'\n'+
            '*sumatera-selatan*'+'\n'+
            '*sumatera-utara*'+'\n')
        } else if (message.body.split(" ")[0] === '-cekcuaca') {
            const input = message.body.split(" ")[1]
            if (input) {
                const prov = listNamaProvinsi.some(el => el === input)
                if (prov) {
                    axios({
                            url: `http://18.141.223.254:5000/${input}`
                        })
                        .then(({data}) => {
                            let str = ""
                            data.area.forEach(el => {
                                let i = `*Daerah : ${el.daerah}*,\ncuaca hari ini : ${el.cuaca.hariIni},\ncuaca besok : ${el.cuaca.besok}\ndan cuaca lusa : ${el.cuaca.lusa}, ini prediksi pada jam 6 sore ya kak, hanya prediksi loh ya \n\n`
                                str += i
                            });
                            message.reply(str)
                        })
                        .catch((err) => {
                            console.log(err)
                            message.reply('maaf nelin tidak mengerti')
                        })
                }else {
                    message.reply('Provinsi Not Found / Input Tidak Ditemukan')
                }
            }else {
                message.reply('Provinsi Not Found / Input Tidak Ditemukan')
            }
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
                    message.reply('Nelin Capek, Nelin Istiraht Dulu ya kak')
                });
        }else if(message.body === '-listkurir'){
            message.reply(`Ini Daftar Kurirnya kak : *jne* \n *pos* \n *jnt* \n *sicepat* \n *sap* \n *ninja*`)
        }else if(message.body.split(" ")[0] === '-cekresi'){ // diulangi
            const input = message.body.split(" ")[1]
            if (input) {
                const kurir = listkurir.find(el => el === input)
                if (kurir) {
                   const result = cekResi.find(el => el.name === kurir)
                   if (result.name) {
                       result[kurir](message.body.split(" ")[2])
                        .then((result) => {
                            message.reply(result)
                        }).catch((err) => {
                            message.reply('Nelin Lagi Gangguan')
                        });
                   } else {
                        message.reply('maaf nelin tidak mengerti')
                   }
                } else {
                    message.reply('Nelin tidak tau kurir itu')
                }
            } else {
                message.reply('maaf nelin tidak mengerti')
            }
        } else {
            message.reply('maaf nelin tidak mengerti')
        }
    } catch (error) {
        message.reply('Nelin Lagi Gangguan')
    }
});

client.initialize();