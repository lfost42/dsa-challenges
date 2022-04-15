/*
Add code to the functions func1 and func2 in order to achieve the desired console logs.
*/

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [1, 2, 3, 4, 5];

function func1(num) {
  // ADD CODE HERE
    if (!(num % 2)) {
    return num;
  }
}
function func2(num) {
  // ADD CODE HERE
  if (num % 2) {
    return num;
  }
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

/*
We determine that func1 needs to return even numbers and func2 needs to return odd numbers when invoked by filterArray. func1 returns num when !num%2 returns false (i.e. 0) and func2 returns num when num%2 returns false (i.e. not 0). 
*/