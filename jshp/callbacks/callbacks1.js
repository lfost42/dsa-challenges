function copyArrayAndMultiplyBy2(array) {
	const output = [];

	for (let i = 0; i < array.length; i++) {
		output.push(array[i] * 2)
	}

	return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

/*
Line 1: declare a function definition with the label copyArrayAndMultiplyBy2 in global memory.
Line 11: declare a constant myArray in global memory and set it equal to the value of an array with elements 1, 2, 3. 
Line 12: declare a constant result and set it equal to the invocation of the function copyArrayAndMultiplyBy2 and passing in the argument myArray.
	The function opens a new local execution context and is pushed onto the call stack. Local memory stores the parameter array and assigns it to myArray which is found in global memory with the value: [1, 2, 3]. 
	Line 2: declare a constant output and set it equal to the value of an empty array. 
	We create another varable i and set it equal to 0. We check to see if i < the length of the array (3). It is so we take array[0] which is 1 and multiply by 2. 2 is pushed to the end of the otput array. 
	i increments to 1 and we cehck if i is less than 3. It is so we take array[1] which is 2 and multiply by 2. 4 is pushed to the end of the output array. 
	i increments to 2 and we check if i is less than 3. It is so we take array[2] which is 3 and multiply by 2. 6 is pushed to the end of the output array. 
	i increments to 3 and we check if i is less than 3. It is not so we exit the for loop and return the output [2, 4, 6] to the label result in global memory. This function is pushed off the call stack and the local execution context is available for garbage collection. 
*/