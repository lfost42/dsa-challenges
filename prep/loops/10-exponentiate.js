//Write a function exponentiate that accepts two arguments:

//base (number)
//power (number)

//exponentiate should return the result of raising the base by the power. 
//Assume that power will always be an integer greater than or equal to zero. 
//Don't forget that any number raised to the 0th power is equal to 1!

//Do not use the built-in Math.pow() method or Javascript's built-in exponentiation 
//operator but feel free to use them moving forward!

function exponentiate(base, power){
  let expon = 1;
  if (power === 0) {
    return 1;
  } else {
    for (let i = 1; i <= power; i++) {
      expon *= base;
    }
  }
  return expon;
}

// Start with edge case. Loop iterates from 1 until the value of power. 
// The variable expon is multiplied by base for each iteration. 
