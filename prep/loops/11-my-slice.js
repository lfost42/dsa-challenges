//Write a function mySlice that accepts up to three arguments:

//originalString (string)
//startIdx (number, optional)
//endIdx (number, optional)

//mySlice should return a string. The returned string should be a copy of the 
//original string. If the user defines a startIdx, the returned string should 
//start at that index:

//mySlice('slice and dice', 2)    // => ice and dice
//If the user defined an endIdx, the returned string should end at the last 
//index before the endIdx:

//mySlice('slice and dice', 2, 5)    // => ice
//If the user doesn't define either the startIdx or the endIdx, return the 
//entire originalString:

//mySlice('slice and dice')    // => slice and dice
//You can assume that startIdx will always be less than or equal to endIdx.

//Do not use the built in .slice string method. Feel free to use it in all 
//future workshop problems, though!

function mySlice(string, startIdx, endIdx) {
  let str = '';
  let start = 0;
  let end = string.length;
  
  if (startIdx !== undefined) {
    start = startIdx;
  }
  if (endIdx !== undefined) {
    end = endIdx;
  }
  for (i = start; i < end; i++ ) {
    str += string[i];
  }
  return str;
}

//I set up the loop based on whether the argument was passed into the function. This allowed the 
//values for start and end to be 0 if startIdx was undefined and string.length if endIdx was undefined. 