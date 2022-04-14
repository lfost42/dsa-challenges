/*
Part 1
Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
Part 2
Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
*/

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
   callback(array[i]);
  }
}

const map = (arr, call) => {
  const results = [];
  forEach(arr, function(element) {
    results.push(call(element))
    });
  return results;
}

/*
Our forEach function takes two arguments: array and callback. A for loop iterates through the array argument and invokes the callback function on each element of the array.

The map function takes two arguments: arr and call. We initialize a variable results to an empty array. We then invoke the forEach function passing in the parameters arr and an anonymous function that takes element as an argument. It invokes the call function passing in element as a parameter, then pushes the evaluated result to the results array. Finally, we return the result array. 
*/