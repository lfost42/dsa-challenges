function display(data) { console.log(data) }
function printHello() { console.log("Hello"); }
function blockFor300ms() {
}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/regis/tweets/1')
futureData.then(display)

blockFor300ms();

console.log("Me first!");

/* 
Line 1: Declare a function definition with the label display and store it in global memory. 
Line 2: Delare a function definition with a label printHello and store it in global memory
Line 3: Declare a function definition with a label blockFor300ms and store it in global memory. 
Line 6: Invoke the function setTimeout by pushing it to the call stack and opening a new execution context.
	We pair the parameters with the arguments in local memory. The first value is a function definition and the second is 0. setTimeout is sent to the web browser API for 0 ms.
	setTimeout is popped off the call stack and the execution context is available for gc. 
	The function definition is enqueued to the callback queue. 
Line 8: Declae a constant futureData to global memory and set it equal to a promise object. Fetch is pushed to the call stack and opens a new execution context. 
	URL is saved to global memory and pushed to the web browser API. 
The promise returned has a value of undefined, status property of pending, and unfulfilled property of undefined.
	fetch is pushed off the call stack and the execution context is available for garbage collection. 
Line 9: futureData.then method is invoked and the function definition becomes the property of unfulfilled in the futureData promise. 
Line 11: blockFor300ms is pushed to the call stack and a new execution context is opened. The function runs. 
The value from the web browser API goes to into the value property of the promise (returned by futureData) and the display property is pushed to the microtask queue. 
	At 300+ms, blockFor300ms is popped off the call stack and the execution context is available for gc.
Line 13: "Me first!" is logged to the console. 
The callback queue first checks the microtask queue and sees the display function. (the call stack must be empty no more synchronous code needs to be run). The status property is updated to resolved. 
The futureData function is pushed to the call stack and an execution context opens.
	We pair our parameters with our arguments. data is assigned to the value property of the promise function. The property is logged to the console. 
	The function is popped off the call stack and the execution context is available for gc. 
	The event loop finds the function definition for printHello and is spushed to the call stack. An execution context opens. 
	We pair our arguments with parameters. There are none so we console log hello. 
	The function definition is popped off the call stack and the execution context is available for gc. 
*/