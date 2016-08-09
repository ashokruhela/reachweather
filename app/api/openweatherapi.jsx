//afec9e254ae49dea67347f0319c65838

var axios = require('axios');
//q=London,uk&
const OPEN_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather?appid=afec9e254ae49dea67347f0319c65838&units=metric";

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_API_URL}&q=${encodedLocation}`;
        console.log(requestURL);
        return axios.get(requestURL).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                debugger;
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
};