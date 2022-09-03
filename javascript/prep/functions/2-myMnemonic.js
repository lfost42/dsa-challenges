//Write a function myMnemonic that accepts up to four strings. 
//myMnemonic should return a new string of the first characters 
for each string argument.
//Note that the user may not pass in all four strings!

function myMnemonic() {
  let  resultString = '';
  for (let i = 0; i < arguments.length; i++) {
    resultString += arguments[i][0];
  }
  return resultString;
}

//I used the arguments object which allows a function to pass in 
any number of arguments. 
//The for loop takes in all arguments and adds the first index of 
each argument to the resultString variable. 
