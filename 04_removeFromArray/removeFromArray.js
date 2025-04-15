// The rest parameter syntax:
//  (...restArgs) allows a function to accept an indefinite number of arguments as an array.
const removeFromArray = function (arrayInput, ...restArgs) {
	const array = arrayInput;

	// restArgs is like an array so we can iterate over the elements of that array
	for (const elem of restArgs) {
		while (array.includes(elem)) {
			const index = array.indexOf(elem);
			array.splice(index, 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
