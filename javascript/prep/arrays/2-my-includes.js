/*
Define a function, myIncludes, that accepts an array and a 
searchValue as arguments.

myIncludes should return true if the searchValue is an element in 
the array. Otherwise, 
myIncludes should return false.

Do not use the built-in .includes array method during this 
problem. Feel free to use it on any future problem though! Note 
that strings have an .includes method, too.
*/

function myIncludes(myArray, searchValue) {
  for(let i = 0; i < myArray.length; i++) {
    if (myArray[i] === searchValue) {
      return true;
    }
  }
  return false;
}

/*
We loop through the array searching each element to see if the 
value matches searchValue and return true if it is. If not, the 
loop is exited and returns false.
