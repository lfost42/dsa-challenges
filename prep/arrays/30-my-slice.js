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

const mySlice = (originalArray, startIdx, endIdx) => {
  let newArray = [];
  if (startIdx === undefined) startIdx = 0;
  if (startIdx < 0) startIdx = originalArray.length + startIdx;
  if (endIdx === undefined) endIdx = originalArray.length;
  if (endIdx < 0) endIdx = originalArray.length + endIdx;
  
  for (let i = startIdx; i < endIdx; i++) {
    newArray.push(originalArray[i]);
  }
  return newArray;
}

//We need a newArray to copy the array as within the given constraints. 
//If startIdx is undefined, set the value to 0 and if negative, set 
//value to originalArray.length + startIdx (sets the array from the 
//end). If endIdx is undefined, we set the value to the length of the 
//array and if negative we add the value to the length of the array. 
//The for loop pushes each array index from the startIdx value to endIdx. 