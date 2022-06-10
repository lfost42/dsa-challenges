function printHello() {
	console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me first!");

/*
Line 1: Declare a function definition with the label PrintHello and store in in global memory.
Line 5: Invoke setTimeout and open an execution context. 
	setTimeout is pushed onto the call stack. In local memory we pair the arguments with the parameters. The first parameter is the function definition printHello and the second parameter is 1000. 
	setTimeout pushes the function definition and 1000 to the Web Browser API and immediately starts a timer. Once pushed to the web browser, the thread of execution goes back to the global execution context and it is available for garbage collection.
	setTimeout is popped off the call stack. 
	Line 7. "Me First" is logged to the console. 
	The thread checks the callback queue and find nothing. Every ms, the thread of execution checks the callback queue and loops until something appears (event loop). 
	When the 1000ms has lapsed, the function definition is pushed to the callback queue. 
	When the event loop finds it, the reference to the execution context is pushed to the call stack and a new execution context is opened. 
	Line 2: "Hello" is logged to the console. 
	We cehck the callback queue and find nothing.
	The setTimer is popped off the call stack, the execution context is garbage collected. 
*/