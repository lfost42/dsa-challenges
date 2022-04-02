//Define a function, myIndexOf, that accepts three arguments:

//source (string)
//searchValue (string)
//startIdx (number, optional)

//If the source contains the searchValue, return the index at which the 
//searchValue starts. If the searchValue appears more than once in the source, 
//return the index from the first occurrence of the searchValue. If the 
//searchValue doesn't exist in the source, return -1.

//If a startIdx is passed into the function, ignore any instances of the 
//searchValue that occur before startIdx. If no startIdx is provided, start 
//searching from the beginning of the source.

//Hint: Javascript's .slice string method may be useful here.

//Do not use the built-in .indexOf string method in your answer. Feel free to 
//use it in all future workshop problems though!

function myIndexOf(source, searchValue, startIdx = 0) {
  let start = 0;
  //let substring = source.slice(i, i+ searchValue.length)
  //if (substring === searchValue)
  if (source.includes(searchValue, startIdx)) {
    for (let i = start; i < source.length; i++) {
      if (source[i] === searchValue[0]) {
        return i;
      }
    }
  }
  return -1;
}

//The includes() method checks a string for the searchValue and contains an override 
//to accept an integer to indicate which index the search should begin. Without the 
//use of indexOf, we locate the index by searching each character of source for the 
//first index of the searchValue. 
