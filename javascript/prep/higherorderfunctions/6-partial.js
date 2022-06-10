/* Write a function, partial, that accepts a callback function and another value (let's call it argA) as arguments. partial should return a new function. When invoked, the new function will:
Accept its own argument (let's call it argB)
Call the callback, passing in argA as the first argument and argB as the second argument
Return the value returned by the callback
*/

const partial = (callback, argA) => {
  return (argB) => {
    return callback(argA, argB);
  }
}

/*
We first start with a function partial that accepts two arguments. The first argument is a callback function (callback) and the second is a value we call argA. The function invokes an anonymous function that accepts an argument argB. The anonymous function returns the evaluated result of the callback function that passes in the arguments argA and argB.
*/