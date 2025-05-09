const add = function (...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const subtract = function (...numbers) {
	return numbers.reduce((total, num) => {
		total === 0 ? (total += num) : (total -= num);
		return total;
	}, 0);
};

// same as add, but without the spread parameter
const sum = function (numbers) {
	return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function (numbers) {
	return numbers.reduce((total, num) => total * num, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (n) {
	let product = n;
	if (product === 0 || product === 1) return 1;
	// if n is 5
	let i = n - 1; // 4
	while (i >= 1) {
		// 4 >= 1, there are 4 iterations, i = 4, 3, 2, 1
		product *= i;
		// 5 * 4 = 20
		// 20 * 3 = 60
		// 60 * 2 = 120
		// 120 * 1 = 120
		--i;
	}
	return product;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
