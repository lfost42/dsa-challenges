/*
Define a function, stringify, that takes a callback function as an argument and returns a new function. When the new function is called, it should invoke the callback function, coerce the value returned into a string, and then return that string.
```
function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
newFunction(); // => '100'
```
*/

const stringify = (callback) => {
  return () => {
    return String(callback());
  }
}

/*
We create a function called stringify that takes a variable callback as an argument. The stringify returns an anonymous function that returns a coerced string of the evaluated result from evoking the callback function. 
*/