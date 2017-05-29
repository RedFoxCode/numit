/**
 * Generates an array of numbers
 *
 * @param number max Maximum number in array (can be negative
 * @return array of numbers
 */

function range(max) {
	if (!Number.isSafeInteger(max)) {
		throw new Error("Range length should be safe integer");
	}

	let numbers = [];
 	const k = max >= 0 ? 1 : -1;

 	max *= k;

 	for (let i = 1; i <= max; i++) {
 		numbers.push(i * k);
 	}

 	return numbers;
}

Number.range = range;

/**
 * Iterator for Number
 *
 * @usage [...<till>]
 * @return array of numbers
 */

Number.prototype[Symbol.iterator] = function* () {
	for (let e of Number.range(+this)) {
		yield e;
	}
}

module.exports = Number;