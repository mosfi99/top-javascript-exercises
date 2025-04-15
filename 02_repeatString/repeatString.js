const repeatString = function (string, num) {
	const inputText = string;
	let outputText = '';

	if (num < 0) {
		return 'ERROR';
	} else {
		for (let i = 0; i < num; i++) {
			outputText += inputText;
		}
		return outputText;
	}
};

// Do not edit below this line
module.exports = repeatString;
