// Function to merge cells within a row.
// Columns are converted to rows, merged as rows, and then converted back to columns.
export const merge = (row) => {
  // Filter out cells with value 0
  let nonZeroData = row.filter(cell => cell.value !== 0);

  let mergedData = [];
  let points = 0;
  let i = 0;

  // Loop through the non-zero cells in a row to merge cells with identical values
  do {
    if (nonZeroData.length === 0) {
        break;  
    } 
    // If there is only one non-zero cell, add it to the merged data
    else if (nonZeroData.length === 1) {
        mergedData.push({value:nonZeroData[i].value, isNew: false});
        i++
    } 
    // If current cell and next cell have the same value, merge them
    else if ((nonZeroData.length > i+1 ) && nonZeroData[i].value === nonZeroData[i+1].value) {
        mergedData.push({ value:(nonZeroData[i].value * 2), isNew: false}); // Merge cells by doubling the value
        points += nonZeroData[i].value * 2; // Update points
        i++; // Skip next cell as it's merged with current
    } 
    // If current cell value does not match the next cell value, move it to the merged data
    else {
      mergedData.push({value:nonZeroData[i].value, isNew: false});
    }
    i++
  } while (i < nonZeroData.length); // Repeat until all non-zero cells are processed

  // If the merged row length is less than 4, fill the rest with zeros
  while (mergedData.length < 4) {
    mergedData.push({value:0, isNew: false});
  }

  return {
      mergedData: mergedData,
      points: points
  };
};


  
// Function to add a new number (2 or 4) at a random empty position in the grid
export const addNewNumber = (gridData) => {
  // Create a deep copy of the grid data to avoid mutation
  const newGrid = JSON.parse(JSON.stringify(gridData));

  // Collect all empty cells (i.e., cells with value 0) from the grid
  let emptyCells = [];
  for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
          // If the cell's value is 0, it's an empty cell
          if (newGrid[row][col].value === 0) {
              // Store the position of the empty cell
              emptyCells.push({row, col});
          }
      }
  }

  // If there are no empty cells, just return the original grid
  if (emptyCells.length === 0) {
      return newGrid; 
  } else {
      // Pick a random empty cell from the list
      let randomIndex = Math.floor(Math.random() * emptyCells.length);
      let randomCell = emptyCells[randomIndex];

      // Decide on a random value (2 or 4) for the new cell
      let randomValue = Math.random() < 0.5 ? 2 : 4;

      // Make a new copy of the grid data
      let newGridData = [...newGrid]; 

      // Insert the new number into the randomly chosen empty cell
      newGridData[randomCell.row][randomCell.col] = {value:randomValue, isNew: true}; 

      // Return the updated grid
      return newGridData;
  }
};

  
  
// Function to transpose a 2D array (grid)
// Transposing is essentially flipping the array over its diagonal,
// which switches the row and column indices of each value
export const transpose = (grid) => {
  return grid[0].map((_, i) => grid.map(row => row[i]));
}

// Function to initialize a 4x4 grid for the game 
// The grid is filled with cells containing the value 0 and isNew set to false
export const initializeGrid = () => {
  // Create an empty array to hold the grid data
  let gridData = [];

  // Populate the array with 4 rows of 4 columns, each cell initialized with 0
  for (let row = 0; row < 4; row++) {
    gridData.push([]); // Add a new row
    for (let col = 0; col < 4; col++) {
      // For each column in the row, add a cell with value 0 and isNew set to false
      gridData[row].push({value:0, isNew: false});
    }
  }

  // Add a new number to two random empty cells in the grid
  gridData = addNewNumber(gridData);
  gridData = addNewNumber(gridData);

  // Return the initialized grid
  return gridData;
}

// Function to check if the game is over.
// The game is over when there are no empty cells (cells with a value of 0)
// and there are no adjacent cells with the same value (which can be merged)
export const checkGameOver = (gridData) => {

  for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
          // Game continues if any cell is empty (value is 0)
          if (gridData[row][col].value === 0) {
              return false;
          }
          // Game continues if the current cell and the cell below it have the same value
          if (row < 3 && gridData[row][col].value === gridData[row + 1][col].value) {
              return false;
          }
          // Game continues if the current cell and the cell to its right have the same value
          if (col < 3 && gridData[row][col].value === gridData[row][col + 1].value) {
              return false;
          }
      }
  }
  // If no empty cells or possible merges are found, the game is over
  return true;
}

// Function to check if the game has been won.
// The game is won when there is a cell with a value of 2048
export const checkGameWon = (gridData) => {
  for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
          // Game is won if any cell has the value 2048
          if (gridData[row][col].value === 2048) {
              return true;
          }
      }
  }
  return false;
}




