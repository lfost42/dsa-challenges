/*
Caching is used in software engineering to temporarily store the result of an "expensive" operation (takes a lot of time or memory). If that result is needed again in the near future, it can be retrieved from the cache instead of calculating it again.

Write a function, cacheSavings, that takes a callback function (let's call it callback) as an argument and returns a new function that accepts one argument. When the new function is called for the first time, it should invoke callback with the argument and save the result of the function call. If the new function is called again with the same argument, the new function should retrieve the stored value instead of invoking callback again!
*/

const cacheSavings = (callback) => {
  let cache = {};
  let result;
  
  return (argument) => {
    if(!(argument in cache)) {
      result = callback(argument);
      cache[argument] = result;
    }
    return cache[argument];
  }
}

/*
We create a function called cacheSavings that takes callback as an argument. We initiate the cache variable to an empty object and initiate the result variable for later use. The outer function returns an anonymous function that accepts the variable argument as an argument. Then we check whether the argument was in cache. If not, we set the result equal to the evaluated result of invoking the callback function with argument passed in. Then we set the value of the cache[argument] to equal result. If the argument is not in cache, we exit the loop and return the value of cache[argument].
*/