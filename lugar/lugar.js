const axios = require('axios');


// Configuracion de oopenweathermap
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const appid = '193f2be6a6affdd3198be2f4b63b3714';

// Funcion que recibe el array de direcicon y regresa un objeto con el nombre de direccion, latitud y longitud
const getLugarLatLon = async(direccion) => {
    //EncodedURL    
    let encodeURL = encodeURI(direccion);
    // console.log(encodeURL);
    const resp = await axios.get(`${baseURL}?q=${encodeURL}&APPID=${appid}`)
        // console.log("Resp:", resp.data);
    if (!resp.data) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const nombre = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        nombre,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}