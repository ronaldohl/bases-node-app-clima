// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: "Dirección de la ciudad para obtener el clima",
            demand: true

        }
    }).argv;


// lugar.getLugarLatLon(argv.direccion).then(resp => console.log(resp));

// clima.getClima(35, 139)
//     .then(resp => console.log(resp))
// .catch(err => console.log(err));

const getInfo = async(direccion) => {
    try {
        const info = await lugar.getLugarLatLon(direccion)
        const resultado = await clima.getClima(info.lat, info.lon)
        return resultado;
    } catch (error) {
        return (`No se pudo obtener el clima de ${direccion}`)
    }
}

getInfo(argv.direccion)
    .then(res => console.log(`El clima en ${argv.direccion} es de ${res}°C `))
    .catch(err => console.log(err))