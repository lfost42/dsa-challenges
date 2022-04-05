//Define a function, rotateArray, that accepts two arguments:
//originalArray (array)
//rotateNum (number)

//If rotateNum is positive, rotate should return a copy of the original array rotated to the right by 
//the rotateNum `of indices.
//rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]

//If rotateNum is negative, rotate should return a copy of the original array rotated to the left by 
//the rotateNum of indices.
//rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]

//If rotateNum is 0, rotate should return a copy of the original array without rotating it.
//rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]

//You can assume the absolute value of rotateNum will be less than the length of the original array.

// const rotateArray = (originalArray, rotateNum) => {
//   let start = originalArray.slice(-rotateNum);
//   let end = originalArray.slice(0, -rotateNum);
//   return [...start, ...end];
// }

const rotateArray = (originalArray, rotateNum) => {
  rotateNum = originalArray.length - rotateNum; 
  let rotated = [];
  for(let i = 0; i < originalArray.length; i++) {
    let newIdx = (i + rotateNum) % originalArray.length;
    rotated.push(originalArray[newIdx]);
  }
  return rotated;
}
  

//The slice method takes up to 2 numbers that indicate the start
//of the array and the end of the array. To rotate the array,
//the start is always entered as -rotateNum to capture the first
//slice of the array. The end of the array will start at index 0 
//until the value of -rotateNum. 
