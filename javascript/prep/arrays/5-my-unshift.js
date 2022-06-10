//Write a function myUnshift that takes an array and a value of any 
//type as arguments.

//myUnshift should return a new array, with value as the first 
//element in the new array.
//myUnshift([1, 2, 3], 0); // => [0, 1, 2, 3];

//Do not use the built-in .unshift method for this problem!

function myUnshift(inputArray, inputValue) {
  let newArray = [inputValue];
  for (let i = 0; i < inputArray.length; i++) {
    newArray.push(inputArray[i]);
  }
  return newArray;
}

//We start by initiating newArray to aa array with inputValue as the
//first item. The for loop then pushes the the inputArray onto newArray. 