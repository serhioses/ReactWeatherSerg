import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8ec4cac8caecbfb9e480ee8040719041&units=imperial';
var apiObj = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location),
            requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            }

            return res.data.main.temp;
        }, function (res) {
            throw new Error(res.response.data.message);
        });
    }
};

export default apiObj;