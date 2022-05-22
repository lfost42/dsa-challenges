function copyArrayandManipulate(array, instructions) {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instrutions(array[i]));
	}
	return output;
}

function multiplyBy2(output) {
	return output * 2;
}

const result = copyArrayandManipulate([1, 2, 3], multiplyBy2);

/*

*/