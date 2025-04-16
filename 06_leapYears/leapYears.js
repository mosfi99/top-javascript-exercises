const leapYears = function (year) {
	// whats a leap year?
	// divisible by 4
	// not divisible by 100 except if
	// is also divisible by 400

	if (year % 4 === 0) {
		return year % 100 !== 0 || year % 400 === 0;
	} else return false;
};

// Do not edit below this line
module.exports = leapYears;
