// In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
const fibonacci = function (input) {
	let inputIndex = input;
	// invalid input handling:
	if (typeof inputIndex !== 'number') inputIndex = parseInt(input);
	if (inputIndex === 0) return 0;
	if (inputIndex < 0) return 'OOPS';

	// fibonacci is the sum of the two preceding numbers
	// I already know the 2 first elements, and I won't hardcode the rest because the length depends to the inputIndex.
	let arr = [1, 1];

	// Now to insert the next values:
	// I need to calculate the fibonacci number; the sum of two preceding numbers.
	// To access the 2 previous indexes: let firstPreceding = 1, and let secondPreceding = 0,
	// Loop: sum the two preceding numbers and push the value to the array.
	// Loop ends: when the array length is equal to the inputIndex.

	// initialize variables
	let firstPreceding = 1;
	let secondPreceding = 0;

	// build fibonacci array
	while (arr.length <= inputIndex) {
		arr.push(arr[firstPreceding] + arr[secondPreceding]);
		console.log(arr);

		// increment variables
		firstPreceding++;
		secondPreceding++;
	}
	// now I need to return the fibonacci value at the inputIndex - 1, since array first position is 0
	return arr[inputIndex - 1];
};

// Do not edit below this line
module.exports = fibonacci;
