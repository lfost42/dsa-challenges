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
Line 1: declare a function with the label copyArrayandManipulate in global memory and set it equal to a function definition.

Line 9: declare a function with the label multiplyBy2 in global memory and set it equal to a function definition.

Line 13: declare a const result and set it equal to the evaluated result of the invocation of copyArrayandManipulate. 

	copyArrayandManipulate opens a new execution context with arguments [1,2,3] and the callback function multiplyBy2 and pushes copyArrayandManipulate to the callstack. 

	In local memory, we pair the parameters array to the argument [1,2,3] and the parameter instructions to a function definition.

	Declare a constant output in local memory and assign it equal to the value of an empty array.
	Declare a variable i and assign it equal to 0. 
	We check if i < 3; it is so we push the invocation of the instructions function with array[i] as the parameter. 

		The invocation opens a new local execution context with the value array[i] which is 1. Instrucitons is pushed to the call stack and process 1 * 2 which is 2. When 2 is retrned, instructions is popped off the call stack and this execution context is available for garbage collection.

	instructions(array[i]) evaluates to 2 which is pushed to the end of the output array. 
	
	i increments to 1. We check if 1 < 3; it is so we push the invocation of the instructions function with array[i] as the parameter.
		The invocation opens a new local execution context with the value array[1] which is 2. Instructions is pushed to the call stack and process 2 * 2 which is 4. When 4 is returned, instructions is popped off the call stack and this execution context is available for garbage collection.

	instructions(array[i]) evaluates to 4 which is pushed to the end of the output array. 
	
	i increments to 2. We check if 2 < 3; it is, so we push the invocation of the instructions function with array[i] as the parameter.

		The invocation opens a new local execution context with the value array[2] which is 3. Instructions is push to the call stack and we process 3 * 2 which is 6. When 6 is returned, the instructions function is popped off the call stack and the execution contxt is available for garbage collection.
		
	instructions(array[i]) evaluates to 6 which is pushed to the end of the output array. 
	
	i increments to 3. We check if 3 < 3. It is not so we exit the for loop and return the output [2, 4, 6] to global memory as the evaluated result of result. 
	
copyArrayandManipulate is popped off the call stack and the local execution context is available for garbage collection. 
*/