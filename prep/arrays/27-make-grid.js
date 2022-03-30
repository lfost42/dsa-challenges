//Write a function makeGrid that accepts two arguments:
//numColumns (number) - how many columns we want our grid to have
//numRows (number) - how many rows we want our grid to have

//makeGrid should return a two-dimensional array that represents a 
//grid of the given dimensions.

const makeGrid = (numColumns, numRows) => {
  let newArray = [];
  for (let i = 0; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j < numColumns; j++) {
      newRow.push(j + 1);
    }
    newArray.push(newRow);
  }
  return newArray;
}

//First we instantiate a new array to the value of an empty array.
//The numRows loop will create a newRow. The newColumns loop will
//populate each row with the numColumns value. Each row is then pushed
//to the newArray. 