/*
Define a function, myOr, that accepts three arguments of any type.

myOr should return the same result as the buit-in || operator:
myOr(true, true, false) === (true || true || false); // => true

Then, define a function, myAnd, that accepts three arguments of 
any type.

myAnd should return the same result as the buit-in && operator:
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true

Hint: Refer to the two rules for and and or [from this lecture 
on truthiness and type coercion]
&& returns the first falsey value, or the last value if all are 
truthy
|| returns the first truthy value, or the last value if all are 
falsey
*/

const myOr = (arg1, arg2, arg3) => {
  if (arg1) {
    return arg1;
  }
  if (arg2) {
    return arg2;
  }
  if (arg3) {
    return arg3;
  }
  return arg3;
}

/* returns the first truthy value, or the last value if all are 
falsey */

const myAnd = (arg1, arg2, arg3) => {
  if (!arg1) {
    return arg1;
  }
  if (!arg2) {
    return arg2;
  }
  if (!arg3) {
    return arg3;
  }
  return arg3;
}

/* returns the first falsey value, or the last value if all are 
truthy
