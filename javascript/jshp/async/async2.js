function printHello() {
	console.log("Hello");
}

function blockFor1Sec() {

}

setTimeout(printHello, 0);

blockFor1Sec();

console.log("Me first!")

/*
Line 1: define a function with the label printHello and store in global memory.
Line 5: define a function with the label blokfor1Se and store it in global memory. 
Line 9: invoke setTimeout with parameters printHello and 0.
	setTimeout is pushed to the call stack and opens a new execution context. 
	The function definition printHello and 0 are stored in local memory. 
	The function definition and time is pushed to the web browser API to enqueue to the callback queue after at least 0 ms.
	The function definition is enqueued to the callback queue. 
	setTimeout is popped off the call stack and the execution context is available for gc.
Line 11: blockFor1Sec is invoked. A local execution context is opened and pushed to the call stack. 
After approx 1000ms, the thread of execution leaves the execution context and is available for gc and the function is popped off the call stack. 
Line 13: "Me first" is printed to the console and the event loop checks the callback queue and finds the function definition for printHello and is pushed to the callStack.
*The event loop had to wait until blockFor1Sec was popped off the call stack before it can allow the callback queue to proceed.
	A new execution context is open and printHello is pushed to the call stack. The console logs "Hello". The function is popped off the call stack and the execution context is popped off the call stack. 
*/