//Define a function, oddCouple, that accepts an array of numbers as an argument.

//oddCouple should return a new array with the first two odd numbers from the original array:
//oddCouple([1, 2, 3, 4, 5]); // => [1, 3]

//If fewer than two odd numbers exist in the original array, return an array with only the 
//one odd number, or an empty array if there are no odd numbers:
//oddCouple([10, 15, 20]); // => [15]
//oddCouple(2, 4, 6, 8); // => []

function oddCouple(myArray) {
  let newArray = [];
  let lengthArray = 0;
    for (let i = 0; i < newArray.length; i++) {
      if ((myArray[i] % 2 == 1) && (lengthArray < 2)) {
      newArray.push(myArray[i]);
      lengthArray++;
      }
    }
  return newArray;
}

//First create an empty array and a variable to store the length of newArray.
//The loop checks both whether a number is odd and the length of the newArray
//is less than 2. As long as both conditions are met, the loop will add odd
//numbers to the array and stop at 2. 