/*
Create a function subtractTwo that accepts a number and returns that number minus 2.
Then create a function map that takes two inputs -
- an array of numbers (a list of numbers)
- a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.
*/

const subtractTwo = (num) => {
  return num - 2;
}

const map = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

/*
Our map function takes two arguments (arr and callback). We initialize a result variable to an empty array and begin a for loop that iterates through each element of arr. We invoke the callback method on each element of the array and push it to the result array. Finally, we return result. 
*/