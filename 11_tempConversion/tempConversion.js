const convertToCelsius = function (fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	celsius = Math.round(celsius * 10) / 10; // rounded to one decimal place
	return celsius;
};

const convertToFahrenheit = function (celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	fahrenheit = Math.round(fahrenheit * 10) / 10; // rounded to one decimal place
	return fahrenheit;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
