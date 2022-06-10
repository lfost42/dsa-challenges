//Define a function, arrayFlattener, that accepts a two-dimensional 
//array as an argument.

//arrayFlattener should return a new, one-dimensional array.
//arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

const arrayFlattener = (myArray) => {
  let newArray = [];
  let innerArray = [];
  
  for (let i = 0; i < myArray.length; i++) {
    if (Array.isArray(myArray[i])) {
      innerArray = myArray[i];
      for (let j = 0; j < innerArray.length; j++) {
        newArray.push(innerArray[j]);
      }
    } else {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

//We initiate a variable for our newArray and innerArray to an empty array.
//While looping the input array, we check to see if any element is an array.
//If the element is an array, it is set to the value of innerArray. Then
//an inner for loop pushes the innerArray elements to the newArray. If the
//input array is not an array, the element is pushed to newArray. 