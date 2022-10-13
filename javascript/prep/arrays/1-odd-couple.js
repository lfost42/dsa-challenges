/*
Define a function, oddCouple, that accepts an array of numbers as 
an argument.

oddCouple should return a new array with the first two odd 
numbers from the original array:
oddCouple([1, 2, 3, 4, 5]); // => [1, 3]

If fewer than two odd numbers exist in the original array, return 
an array with only the one odd number, or an empty array if there 
are no odd numbers:

oddCouple([10, 15, 20]); // => [15]
oddCouple(2, 4, 6, 8); // => []
*/

function oddCouple(myArray) {
  let newArray = [];
  for (let i = 0 ; i < myArray.length; i++) {
    if (myArray[i] % 2) newArray.push(myArray[i]);
    if (newArray.length === 2) return newArray;
    }
    return newArray;
}

/* 
First create a newArray and initiate it to the value of an 
empty array. The loop checks whether a number is odd. If the 
length of newArray equals 2, we return the newArray. Else, we 
return newArray when the loop is complete. 
*/
