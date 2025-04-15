const reverseString = function (string) {
	const input = string; // hello
	const array = input.split(''); // [h, e, l, l, o]
	let output = '';

	for (let i = 1; i <= array.length; i++) {
		output += array[array.length - i]; // get the last element of the array
	}
	return output; // olleh
};

// Do not edit below this line
module.exports = reverseString;
