const num = 3;
function multiplyBy2(inutNumber) {
	const result = inputNumber * 2;
	return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

/*
Line 1: Declare a constant called "num" and assign it to the integer value 3 and save it into global memory.
Line 2: Declare a function definition with the label "multiplyBy2" and store it in global memory (name and stored code).
Line 7: Declare a constant variable called "output" in global memory. output invokes the function 'multiplyBy2' and opens a new local execution context; this also pushes 'multiplyBy2' onto the call stack. 
	In local memory, we pair the argument 'num' with the parameter 'inputNumber'. The thread looks in global memory for num and finds the value 3. It assigns the value 3 to the inputNumber variable. 
	Line 3: In local memory, we delare a constant variable called 'result' and assign it to the value inputNumber*2. The thread of execution finds inputNumber in local memory and multiplies value 3 by 2. The variable result is assigned the value 6. The result variable is returned and assigned to the variable output in global memory. multiplyBy2 is popped off the call stack and the execution context is available for garbage collection. 
Line 8: Declare a constant variable called "newOutput" in global memory and assign it to the evaluated result of the invocation of multiplyBy2, passing in the argument: 10.
	We open a new execution context that evaluates multiplyBy2 with the argument 10 and it's pushed onto the call stack.  	
	In local memory, we pair the argument 10 with the parameter inputNumber. The constant variable result is assigned the evaluated result of 10*2 which is 20. In local memory, result is evaluated to 20 and is returned to global memory as the value of newOutput.  multiplyBy2 is popped off the callstack and the execution context is available for garbage collection. 
*/