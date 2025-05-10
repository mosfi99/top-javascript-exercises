// // sort, good for small datasets, since O(n log n).
// const findTheOldest = function (arr) {
// const year = new Date().getFullYear();
// arr.sort((a, b) => {

// 	const aAge = a.yearOfDeath
// 		? a.yearOfDeath - a.yearOfBirth
// 		: year - a.yearOfBirth;

// 	const bAge = b.yearOfDeath
// 		? b.yearOfDeath - b.yearOfBirth
// 		: year - b.yearOfBirth;

// 	return bAge - aAge;
// });
// return arr[0];
// };

// // reduce, more efficient with large datasets, since O(n).
const findTheOldest = function (arr) {
	const year = new Date().getFullYear();

	return arr.reduce((oldest, current) => {
		const oldestAge = oldest.yearOfDeath
			? oldest.yearOfDeath - oldest.yearOfBirth
			: year - oldest.yearOfBirth;

		const currentAge = current.yearOfDeath
			? current.yearOfDeath - current.yearOfBirth
			: year - current.yearOfBirth;

		return oldestAge > currentAge ? oldest : current;
	}, {});
};

// Do not edit below this line
module.exports = findTheOldest;
