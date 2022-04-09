/* Define a function finderFunction that accepts an array and a callback function as arguments. finderFunction should pass each element from the array into the callback function. If the callback returns true for any of the elements in the array, return the index of the current element. If the callback never returns true, return -1;
```
let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1
```
*/

const finderFunction = (array, callback) => {
  for (let i = 0; i < array.length; i ++) {
    if (callback(array[i]))
      return i;
  }
  return -1;
}

/* We create a function that passes in the arguments array and callback. We loop through the array and if callback of any element in the array is true we return the index (i). If none of them are true, we exit the loop and return -1.
*/