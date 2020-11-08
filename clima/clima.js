const axios = require("axios");


const appid = '193f2be6a6affdd3198be2f4b63b3714';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const units = 'metric';

const getClima = async(lat, lon) => {
    const resp = await axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&APPID=${appid}`);
    // console.log("resp:  ", resp);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}