export const merge = (row) => {
    let nonZeroData = row.filter(val => val !== 0); // Remove zeros
    let mergedData = [];
  
    for (let i = 0; i < nonZeroData.length; i++) {
      if (nonZeroData[i] === nonZeroData[i+1]) {
        mergedData.push(nonZeroData[i] * 2);
        i++; // Skip the next value
      } else {
        mergedData.push(nonZeroData[i]);
      }
    }
  
    // Add zeros to the end of the merged data
    while (mergedData.length < 4) {
      mergedData.push(0);
    }
  
    return mergedData;
  };
  
export const addNewNumber = (gridData) => {

    const newGrid = JSON.parse(JSON.stringify(gridData));
    let emptyCells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (newGrid[row][col] === 0) {
                emptyCells.push({row, col});
            }
        }
    }

    if (emptyCells.length === 0) {
        return newGrid; // No empty cells
    } else {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let randomCell = emptyCells[randomIndex];
        let randomValue = Math.random() < 0.5 ? 2 : 4;

        let newGridData = [...newGrid]; // Copy the old state
        newGridData[randomCell.row][randomCell.col] = randomValue; // Add the new number

        return newGridData;
    }
};
  
  
export const transpose = (grid) => {
    return grid[0].map((_, i) => grid.map(row => row[i]));
}

export const initializeGrid = () => {
    let gridData = [];
    for (let row = 0; row < 4; row++) {
      gridData.push([]);
      for (let col = 0; col < 4; col++) {
        gridData[row].push(0);
      }
    }
    gridData = addNewNumber(gridData);
    gridData = addNewNumber(gridData);
    return gridData;
}

export const checkGameOver = (gridData) => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (gridData[row][col] === 0) {
          return false; // game is not over if there is any zero (empty) cell
        }
        // check for adjacent cells in row
        if (row < 3 && gridData[row][col] === gridData[row + 1][col]) {
          return false; // game is not over if there is a possible merge in the row
        }
        // check for adjacent cells in column
        if (col < 3 && gridData[row][col] === gridData[row][col + 1]) {
          return false; // game is not over if there is a possible merge in the column
        }
      }
    }
    return true; // game is over
  }