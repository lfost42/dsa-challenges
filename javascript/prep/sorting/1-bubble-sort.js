/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest using bubble sort.
*/

const sortByLength = (array) => {
  let stop = false;
  while (!stop) {
    stop = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1].length > array[i].length) {
        stop = false;
        [array[i-1], array[i]] = [array[i], array[i-1]];
      }
    }
  }
  return array;
}

/*
We initialize a variable stop to equal false and begin a while loop. In the loop we first set stop to equal true. If we find an element that's requires swapping (i.e. the element we're checking is longer than a preceding element, we switch the stop variable back to false and swap the variables we're comparing. When the sort is complete, the stop variable remains true, we exit the loop, and return the sorted array.
*/