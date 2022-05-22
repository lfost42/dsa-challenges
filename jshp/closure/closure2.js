function outer() {
	let counter = 0;
	function incrementCounter() {
		counter++;
	}
	return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

/*
Line 1: Declare a function definition with the label outer and store it in global memory.
Line 9: Declare a constant myNewFunction and set it equal to the evaluated result of invoking the outer function.
	A new execution context is opened with local memory. 
	Line 2: In local memory, we declare a variable counter and assign it a value of 0. 
	Line 3: We declare a function with the label incrementCounter and store it in local memory. 
	Line 6: We return the evaluated result of the invocation of the incrememntCounter function which it locates in local memory. 
The functionality of incrementCounter is returned as the evaluated result of the myNewFunction label.  
	The local execution context is available for garbage collection and myNewFunction is popped off the call stack. 
Line 10: myNewFunction opens a new local execution context and pushed on to the call stack. 
	Line 4: runs myNewFunction in the local execution context. It first looks in local memory for counter and doesn't find it. It looks in global memory and finds it in the memory of myNewFunction (closed over variable environment or persistance lexically scoped referenced data). Counter is assigned to 0 and increments to 1. 
	
	The local execution context is available for garbage collection and myNewFunction is popped off the call stack. 
Line 11: myNewFunction is pushed on to the context and runs its own execution context. 
	Line 4: runs myNewFunction in the local execution context. It first looks in local memory for counter and doesn't find it. It looks in global memory and finds it in the memory of myNewFunction. Counter is assigned to 1 and increments to 2. 
*/