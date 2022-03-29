//Define a function, myLastIndexOf, that accepts up to three arguments:
//array
//searchValue
//startIdx (optional)
//myLastIndexOf should return the last index at which searchValue appears in the array.
//myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3

//If searchValue isn't in the array, myLastIndexOf should return -1.
//myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1

//If startIdx is defined, myLastIndexOf should start looking for the searchValue at that index, and 
//then move towards the front of the array as it looks for searchValue.
//myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0

//You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it in the 
//future! Note that strings also have a .lastIndexOf method.

function myLastIndexOf(array, searchValue, startIdx) {  
  let indexOf = -1;			
  let end = array.length;
  if (startIdx !== undefined) {
    end = startIdx;			
  }
  
  for(let i = 0; i < end; i++) {
    if (array[i] === searchValue) {
      indexOf = i;
    }
  }
  return indexOf;
}

//The default value of indexOf is set to -1 in case the searchValue is not found. 
//A variable end is set to startIdx if exists and array.length if it does not. This allows
//the indexOf to be less than startIdx. As the array finds matches for searchValue,
//the variable indexOf is set to the value of I so that it returns the last match. 