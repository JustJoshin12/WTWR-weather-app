//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
//api key 9d88578d96b363adcadf5a0117ea7c43
const latitude = 44.34;
const longitude = 10.99;
const APIkey = '9d88578d96b363adcadf5a0117ea7c43';
export const GetForecastWeather = () => {
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then((res) => {
        if (res.ok) {
            return (res.json()); 
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
    return weatherApi;
};

export const parseWeatherData = (data) => {
    const main = data.main;
    const temperature = main && main.temp;
    return Math.ceil(temperature);
}

