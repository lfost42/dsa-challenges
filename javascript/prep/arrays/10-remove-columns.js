//Write a function removeColumns that accepts two arguments:
//originalGrid (two-dimensional array)
//numColums (number)

//removeColumns should return a new grid with the correct number of columns 
//removed.

function removeColumns (grid, cols) {
  let newGrid = [];
  for(let i = 0; i < grid.length; i++) {
    let row = grid[i];
    newGrid.push(row.slice(0, row.length - cols));
  }
  return newGrid;
}

//First we create loops that iterates through the grid. We'll set the variable
//orw to the value of grid[i]. Then we push the slice of row starting at 0
// until row.length - cols.
