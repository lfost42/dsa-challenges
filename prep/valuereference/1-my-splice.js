/*
Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.
mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).
Do not use .splice in your function.
let myArray = [1, 2, 3];
mySplice(myArray, 1, 1, 'apples')) // => [2]
console.log(myArray)    // [1,'apples', 3]
*/

const mySplice = (array, startIdx, del, value) =>{
  let temp = array.slice();
//mutates the original array by removing the correct element(s) from it
  array.length = 0; // empty out the array
  let removed = [];
  //adds a new value at the correct index without removing an element if deleteCount is 0
  if (del === 0 && value) { 
    for (let i = 0; i < temp.length; i++) {
      if (i === startIdx) {
        array.push(value); // adds a new value at the correct index
        array.push(temp[i]); // delete from the middle of the array
      } else {
        array.push(temp[i]); // replace from the middle of the array
      }
    }
    return removed;    
//returns an array of all removed elements if deleteCount is greater than 1
//removes multiple elements if deleteCount is greater than 1
  } else if (del && value) { 
    for (let i = 0; i < temp.length; i++) {
      if (i === startIdx) {
        array.push(value); // adds a new value at the correct index
        removed.push(temp[i]); // delete from the middle of the array
      } else {
        array.push(temp[i]); // replace from the middle of the array
      }
    }
    return removed;
  } else {
    for (let i = 0; i < temp.length; i++) {
      if (i >= startIdx && i < startIdx + del) {
        removed.push(temp[i]); // delete from the middle of the array
      } else { 
        array.push(temp[i]); // replace from the middle of the array
      }
    }
    return removed; //returns array of removed elements
  }