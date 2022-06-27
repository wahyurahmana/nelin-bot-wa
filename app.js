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
    } else if (message.body === '-cekcuaca ntb') {
        axios({
                url: 'http://18.141.223.254:5000/ntb'
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
    }else if (message.body === '-cekcuaca bali') {
        axios({
                url: 'http://18.141.223.254:5000/bali'
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
    }else if (message.body === '-cekcuaca aceh') {
        axios({
                url: 'http://18.141.223.254:5000/aceh'
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
    }else if (message.body === '-cekcuaca bangka-belitung') {
        axios({
                url: 'http://18.141.223.254:5000/bangka-belitung'
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
    }else if (message.body === '-cekcuaca banten') {
        axios({
                url: 'http://18.141.223.254:5000/banten'
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
    }else if (message.body === '-cekcuaca bengkulu') {
        axios({
                url: 'http://18.141.223.254:5000/bengkulu'
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
    }else if (message.body === '-cekcuaca yogyakarta') {
        axios({
                url: 'http://18.141.223.254:5000/yogyakarta'
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
    }else if (message.body === '-cekcuaca dki-jakarta') {
        axios({
                url: 'http://18.141.223.254:5000/dki-jakarta'
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
    }else if (message.body === '-cekcuaca gorontalo') {
        axios({
                url: 'http://18.141.223.254:5000/gorontalo'
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
    }else if (message.body === '-cekcuaca jambi') {
        axios({
                url: 'http://18.141.223.254:5000/jambi'
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
    }else if (message.body === '-cekcuaca jawa-barat') {
        axios({
                url: 'http://18.141.223.254:5000/jawa-barat'
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
    }else if (message.body === '-cekcuaca jawa-tengah') {
        axios({
                url: 'http://18.141.223.254:5000/jawa-tengah'
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
    }else if (message.body === '-cekcuaca jawa-timur') {
        axios({
                url: 'http://18.141.223.254:5000/jawa-timur'
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
    }else if (message.body === '-cekcuaca kalimantan-barat') {
        axios({
                url: 'http://18.141.223.254:5000/kalimantan-barat'
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
    }else if (message.body === '-cekcuaca kalimantan-selatan') {
        axios({
                url: 'http://18.141.223.254:5000/kalimantan-selatan'
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
    }else if (message.body === '-cekcuaca kalimantan-tengah') {
        axios({
                url: 'http://18.141.223.254:5000/kalimantan-tengah'
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
    }else if (message.body === '-cekcuaca kalimantan-timur') {
        axios({
                url: 'http://18.141.223.254:5000/kalimantan-timur'
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
    }else if (message.body === '-cekcuaca kalimantan-utara') {
        axios({
                url: 'http://18.141.223.254:5000/kalimantan-utara'
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
    }else if (message.body === '-cekcuaca kepulauan-riau') {
        axios({
                url: 'http://18.141.223.254:5000/kepulauan-riau'
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
    }else if (message.body === '-cekcuaca lampung') {
        axios({
                url: 'http://18.141.223.254:5000/lampung'
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
    }else if (message.body === '-cekcuaca maluku') {
        axios({
                url: 'http://18.141.223.254:5000/maluku'
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
    }else if (message.body === '-cekcuaca maluku-utara') {
        axios({
                url: 'http://18.141.223.254:5000/maluku-utara'
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
    }else if (message.body === '-cekcuaca ntt') {
        axios({
                url: 'http://18.141.223.254:5000/ntt'
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
    }else if (message.body === '-cekcuaca papua') {
        axios({
                url: 'http://18.141.223.254:5000/papua'
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
    }else if (message.body === '-cekcuaca papua-barat') {
        axios({
                url: 'http://18.141.223.254:5000/papua-barat'
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
    }else if (message.body === '-cekcuaca riau') {
        axios({
                url: 'http://18.141.223.254:5000/riau'
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
    }else if (message.body === '-cekcuaca sulawesi-barat') {
        axios({
                url: 'http://18.141.223.254:5000/sulawesi-barat'
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
    }else if (message.body === '-cekcuaca sulawesi-selatan') {
        axios({
                url: 'http://18.141.223.254:5000/sulawesi-selatan'
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
    }else if (message.body === '-cekcuaca sulawesi-tengah') {
        axios({
                url: 'http://18.141.223.254:5000/sulawesi-tengah'
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
    }else if (message.body === '-cekcuaca sulawesi-tenggara') {
        axios({
                url: 'http://18.141.223.254:5000/sulawesi-tenggara'
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
    }else if (message.body === '-cekcuaca sulawesi-utara') {
        axios({
                url: 'http://18.141.223.254:5000/sulawesi-utara'
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
    }else if (message.body === '-cekcuaca sumatera-barat') {
        axios({
                url: 'http://18.141.223.254:5000/sumatera-barat'
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
    }else if (message.body === '-cekcuaca sumatera-selatan') {
        axios({
                url: 'http://18.141.223.254:5000/sumatera-selatan'
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
    }else if (message.body === '-cekcuaca sumatera-utara') {
        axios({
                url: 'http://18.141.223.254:5000/sumatera-utara'
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