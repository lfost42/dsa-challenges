function display(data) {
	console.log(data);
}

const futureData = fetch('https://twitter.com/regis/tweets/1')

futureData.then(display);


console.log("Me first!");

/* NOTES: Promise object can update itself and invoke functionality. 3 properties: value (eventually returned from http request). Value is undefined once promise is invoked.  When promise is created, its status is pending. When .then is invoked, passing in its funciton definition parameter, and fill in the onFulfilled property with the function definition (it's the argument to the .then method). When the value is updated, status updates to resolved and what is onFulfilled is invoked, passing in the value in as the argument. */

/*
Line 1: declare a function definition with the label display and store it in local memory.
Line 5: futureData constant is declared in global memory and assigned to the evaluated result of the fetch method, passing in a string URL.
	An execution context is open and the fetch method is pushed to the call stack. 
	In local memory, the first parameter is assigned to the string url. 
	A get request is sent to the web browser API. It returns a promis object to global memory. 
		The promise object has a value property as undefined and status as pending and a third property onFulfilled which is empty. 
	The execution context is available for gc and fetch is popped off the call stack.
Line 7: The then funciton definition is saved as the onFulfilled property. 
Line 10: "Me first!" is logged to the console.
	The value property is updated to 'arf'. The status is updated to resolved. The funciton definition in onFulfilled is pushed to the microtask queue. 
	When the event loop finds the microtask queue.
	display is pushed to the call stack and opens an execution context. The parameter data is assigned a value of 'arf'. 
	'arf' is logged to the console.
	The thread of execution exits the execution conext and display is popped off the call stack. 
*/