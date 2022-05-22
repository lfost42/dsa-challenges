function multiplyBy2(num) {
	return num * 2;
}

const secondLabel = createFunction;

const generatedFunc = createFunction();

const result = generatedFunc(3);

/*
Line 1: Declare a function definition with the label "multiplyBy2" and store it in global memory.
Line 5: Declare a constant with the label secondLabel in global memory and assign it the function definition createFunction.
Line 7: Declare a constant with the label generatedFunc in global memory and set it equal to the invocation of  createFunction. A local execution context opens and the function is push it on to the call stack.
	Line 2: In local memory, we store the function defnition of multiplyBy2 and set it equal to a function definition. 
We return the function definition multiplyBy2 as the assigned value to the generatedFunc label in global memory. 
	The local execution context is available for garbage collection and createFunction is popped off the call stack. 
Line 9: We declare a constant with the label result in global memory and set it equal to the invocation of generatedFunc with 3 as a parameter. A local execution context opens and the function is push it on to the call stack. 
	Line 2: In local memory, we pair the argument 3 with the parameter num. In the local execution context we run num * 2 which is 6. 
We return 6 into global memory as the assigned value of result. 
	The local execution context is available for garbage collection and createFunction is popped off the call stack. 
*/ 