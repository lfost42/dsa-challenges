//Write a function onlyOne that accepts three arguments of any type.

//onlyOne should return true only if exactly one of the three arguments are truthy. 
//Otherwise, it should return false.

//Do not use the equality operators (== and ===) in your solution.
//onlyOne(false, false, true); // => true
//onlyOne(0, 1, 2) // => false

function onlyOne(arg1, arg2, arg3) {
  let count = 0;
  count = (arg1 ? 1 : 0 ) + (arg2 ? 1 : 0 ) + (arg3 ? 1 : 0 );
  return (count > 0 && count < 2);
}

//I used ternary expressions to add 1 to a variable count if any of the arguments 
//passed in were true. The function returned true count was greater than 0 and less than 2. 