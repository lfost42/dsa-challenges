/*
Write a function, callCount, that returns a new function. The new function should return the number of times its been called.
*/

const callCount = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

/*
We create a function called callCount. We initialize a variable count to equal 0. Then we return a function that increments the value of count and returns the evaluated result of count. 
*/