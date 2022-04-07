/*
Define a function, callThemAll, that accepts an object, object, and a value, value.
callThemAll should call every method in the object, passing in the value as the argument with each call.
callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.
let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

callThemAll(addNums, 100); // => [110, 120]
*/

const callThemAll = (object, value) => {
  let result = [];
  for (let key in object) {
    let element = object[key];
    if (typeof element === 'function') {
    let parameter = element(value);
    result.push(parameter);
    }
  }
  return result;
}

/*
First we loop through each key in object and
set the variable element to the evaluated
result of object at index key. If we find a
Function, we push the element of value to the
result array.
*/
