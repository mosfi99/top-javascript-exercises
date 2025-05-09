const sumAll = function (min, max) {
	function isValidNumber(num) {
		return Number.isInteger(num) && num >= 0;
	}
	// if any of these is false, the error "activates" with the ! symbol.
	if (!isValidNumber(min) || !isValidNumber(max)) {
		return 'ERROR';
	}
	// if the min value is bigger than the max, we need to swap them
	if (min > max) {
		[min, max] = [max, min]; // here the swap occurs with array destructuring syntax
	}

	let sum = 0;
	for (i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
