//Define a function, myJoin, that accepts up to two arguments:
//array
//separator (string, optional)

//myJoin should return a string with all of the elements from the array joined 
//together. The separator should separate the joined elements:
//myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
//myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"

//If separator is undefined, use ',' as the default separator.
//myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"

//If any elements in the array are undefined or null, they should be replaced 
//with an empty string in the returned string.
//myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"

//Do not use the built-in .join array method in your answer. Feel free to use 
//it in all future problems though!

const myJoin = (array, separator) => {
  if (separator === undefined) {
    sep = ',';
  } else {
    sep = separator;
  }
  sentence = '';
  
  for (let i = 0; i < array.length-1; i++) {
    sentence += array[i] ? array[i] + sep : '' + sep;
  }
  sentence += array[array.length-1];
  return sentence;
}


// First we give variable sep the value of ',' if separator is undefined or separator.
// Then we instantiate a new empty string. A for loop iterates through each element 
// except the last and adds the element and sep if element is not null and an empty string
// plus sep if the element is null. Outside of the loop the last element is added to
// the sentence and is returned. 