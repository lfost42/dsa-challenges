//Define a function, evenAndOdd, that accepts an array.

//evenAndOdd should return a new array containing two smaller arrays. The first 
//element in the new array should be an array with all of the even numbers from 
//the original array. The second element in the new array should be an array with 
//all of the odd numbers from the original array.

//evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]

const evenAndOdd = (inputArray) == {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 == 0) evenArray.push(inputArray[i]);
    if (inputArray[i] % 2 == 1) oddArray.push(inputArray[i]);
  }
  return [evenArray, oddArray];
}

//We begin with two empty arrays. A for loop adds all even numbers to the 
//evenArray and all odd numbers to the oddArray. We return an array
//containing both the evenArray and oddArray. 