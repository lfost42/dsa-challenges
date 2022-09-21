/*
Write a function zeroDarkThirty that accepts a number as an 
argument.

zeroDarkThirty should return a number with all of the zeroes 
removed:
zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23

If the number 0 is passed in as the argument, return NaN.
zeroDarkThirty(0) // => NaN
*/

function zeroDarkThirty(num) {
  let myString = num.toString().split('');
  let myNumber = '';
  
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] !== '0') {
      myNumber += myString[i];
    }
  }
  return parseInt(myNumber);
}

/*
First we convert the number into a string. A for loop iterates 
through each digit and builds the myNumber string if the
number is not 0. The string is parsed into an integer and 
returned.
*/

const zeroDarkThirty = (num) => {
  let strNum = String(num);
  let myNum = '';
  if(num === 0) {
    return NaN;
  } else {
    for(let i = 0; i < strNum.length; i++) {
      if (strNum[i] !== '0') {
        myNum += strNum[i];
        console.log(myNum);
      }
    }
  }
  return Number(myNum);
}

//Alternate casting to numbers/strings. 
