const convertToCelsius = function(fahrenheitTemp) {
    let celsius = (fahrenheitTemp - 32) / 1.8;

    return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
    let fahrenheit = (celsiusTemp * 1.8) + 32;

    return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
