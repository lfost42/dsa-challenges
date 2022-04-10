/*
Define a function timesTable that accepts a number as an argument.
timesTable should generate a 'times table' function for any number passed in. The generated function should accept a number as an argument and return a function that itself returns the product of that number and any number passed in.
*/

const timesTable = (num1) => {
  return (num2) => {
    return num1 * num2; 
  }
}

/*
We create a function timesTable that accepts the variable num1 as an argument. It invokes a function that accepts a variable num2 as an argument. The anonymous function returns the evaluated result of num1 * num2.
*/