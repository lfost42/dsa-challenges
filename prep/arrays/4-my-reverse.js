//Define a function myReverse that accepts an array.

//myReverse should return a new array with the elements in reverse order.
//myReverse([1, 2, 3]); // => [3, 2, 1]

//Do not use the built-in .reverse method for this problem. You can use it on all 
//future problems though!

function myReverse(myArray) {
  let newArray = [];
  for (let i = myArray.length-1; i >=0; i--) {
    newArray.push(myArray[i]);
  }
  return newArray;
}

//We initiate an empty newArray and add the numbers
//from the input array starting at the end to the beginning.