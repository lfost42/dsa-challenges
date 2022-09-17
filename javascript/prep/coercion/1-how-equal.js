/*
Define a function, howEqual, that accepts two arguments of any 
type.

howEqual should return the string 'loosely' if the two values 
passed into the function are loosely equal. howEqual should 
return 'strictly' if the two values are strictly equal. howEqual 
should return the string 'not equal' if the two values are 
neither strictly nor loosely equal.

howEqual(0, '0'); // => loosely
howEqual(3, 9/3); // => strictly
howEqual(true, 'truthy') // => not equal
*/

function howEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return 'strictly';
  } else if (arg1 == arg2) {
    return 'loosely';
  } else {
    return 'not equal';
  }
}

/*
strictly checks for value and type
loosely checks for value but not type
not equal checks neither value nor type
*/
