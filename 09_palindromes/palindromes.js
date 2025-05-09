const palindromes = function (str) {
	// Since we only consider letters and numbers, create a variable containing all valid characters
	const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

	const cleanString = str
		.toLowerCase()
		.split('')
		.filter((character) => alphanumerical.includes(character))
		.join('');

	const reverseString = cleanString.split('').reverse().join('');

	return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
