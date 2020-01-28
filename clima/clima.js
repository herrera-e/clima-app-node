const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=502ef4613e6d4e1ec0f29cfa95528c68&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}