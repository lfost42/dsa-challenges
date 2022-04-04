//Define a function, mySlice, that accepts up to three arguments:
//originalArray (array)
//startIdx (number, optional)
//endIdx (number, optional)

//mySlice should return a copy of the original array. The copy should include all of the elements 
//from originalArray, starting at and including the startIdx, up through and excluding the endIdx.
//mySlice([1, 2, 3], 1, 2) // => [2]

//If endIdx is undefined, include all the indices starting at and including the startIdx through the 
//end of the original array.
//mySlice([1, 2, 3], 1) // => [2, 3]

//If startIdx is undefined, return a copy of the original array.
//mySlice([1, 2, 3]) // => [1, 2, 3]

//startIdx and endIdx can be negative numbers, in which case they count indices from the back of the 
//array.
//mySlice([1, 2, 3], -1) // => [3]

//Do not use the built-in .slice array method in your answer. Feel free to use it in all future problems though!

const mySlice = (originalArray, startIdx = 0, endIdx = originalArray.length) => {
  let newArray = [];
  if (startIdx < 0) startIdx = originalArray.length + startIdx;
  if (endIdx < 0) endIdx = originalArray.length + endIdx;
  
  for (let i = startIdx; i < endIdx; i++) {
    newArray.push(originalArray[i]);
  }
  return newArray;
}

/*
First we set a default value for startIdx to 0 and endIdx to originalArray.length.
We need a newArray to copy the array as within the given constraints. If startIdx is 
negative, we set the value to originalArray.length + startIdx (to check the array at
the end). If endIdx is negative we add the value to the length of the array to count
indices from the back of the array. The for loop pushes each array index from the 
startIdx value to endIdx. 
*/
