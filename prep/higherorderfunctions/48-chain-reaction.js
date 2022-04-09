/*
Define a function, chainReaction, that accepts 2 arguments:
1) a starting value
2) an array of functions
chainReaction should pass the starting value into the first function in the array. It should pass the value returned by the first function as an argument into the second function, and so on until every function in the array is called.
```
chainReaction should return the final value returned by the final function in the array.

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15
```
*/

const chainReaction = (start, array) => {
  array.forEach((arraysFuncs) => {
    start = arraysFuncs(start);
  });
  return start;
}

/* We create a function that passes in the arguments start and array. We use a forEach function to iterate through the array and pass in an array of functions (arrayFuncs). We set the start value to equal the arraysFuncs function that passes in the argument start. This passes the start value as an argument to the remaining functions and returns the final value returned by the final function of the array. */