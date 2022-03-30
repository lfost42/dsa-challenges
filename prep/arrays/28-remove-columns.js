//Write a function removeColumns that accepts two arguments:
//originalGrid (two-dimensional array)
//numColums (number)

//removeColumns should return a new grid with the correct number of columns 
//removed.

const removeColumns = (originalGrid, numColumns) => {
  for (let i = 0; i < originalGrid.length; i++) {
    for (let j = 0; j < numColumns; j++) {
      originalGrid[i].pop();
    }
  }
  return originalGrid;
}

//First we create an outer loop that iterates through the originalGrid
//and an inner loop that iterates through numColumn. Within the numColumns
//loop, the column is popped off. 