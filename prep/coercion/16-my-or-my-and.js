//Define a function, myOr, that accepts three arguments of any type.

//myOr should return the same result as the buit-in || operator:
//myOr(true, true, false) === (true || true || false); // => true

//Then, define a function, myAnd, that accepts three arguments of any type.

//myAnd should return the same result as the buit-in && operator:
//myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true

//Hint: Refer to the two rules for and and or [from this lecture on truthiness and type coercion]

function myOr(arg1, arg2, arg3) {
  return arg1 || arg2 || arg3;
}

function myAnd(arg1, arg2, arg3) {
  return arg1 && arg2 && arg3;
}

//I don't know why this was a challenge. 