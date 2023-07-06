export const merge = (row) => {
  let nonZeroData = row.filter(cell => cell.value !== 0); // Remove zeros
  let mergedData = [];
  let points = 0;
  let i = 0;
  do {
    if (nonZeroData.length === 0) {
        break;  
    } else if (nonZeroData.length === 1) {
        mergedData.push({value:nonZeroData[i].value, isNew: false});
        i++
    } else if ((nonZeroData.length > i+1 ) && nonZeroData[i].value === nonZeroData[i+1].value) {
        mergedData.push({ value:(nonZeroData[i].value * 2), isNew: false});
        points += nonZeroData[i].value * 2;
        i++; // Skip the next cell
    } else {
      mergedData.push({value:nonZeroData[i].value, isNew: false});
    }
        i++
  } while (i < nonZeroData.length);

  // Add zeros to the end of the merged data
  while (mergedData.length < 4) {
    mergedData.push({value:0, isNew: false});
  }
  return {
      mergedData: mergedData,
      points: points
  };
};

  
export const addNewNumber = (gridData) => {
    const newGrid = JSON.parse(JSON.stringify(gridData));
    let emptyCells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (newGrid[row][col].value === 0) {
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
        newGridData[randomCell.row][randomCell.col] = {value:randomValue, isNew: true}; // Add the new number

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
        gridData[row].push({value:0, isNew: false});
      }
    }
    gridData = addNewNumber(gridData);
    gridData = addNewNumber(gridData);
    return gridData;
}

export const checkGameOver = (gridData) => {
  console.log("checkGameOver")
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (gridData[row][col].value === 0) {
          return false; // game is not over if there is any zero (empty) cell
        }
        // check for adjacent cells in row
        if (row < 3 && gridData[row][col].value === gridData[row + 1][col].value) {
          return false; // game is not over if there is a possible merge in the row
        }
        // check for adjacent cells in column
        if (col < 3 && gridData[row][col].value === gridData[row][col + 1].value) {
          return false; // game is not over if there is a possible merge in the column
        }
      }
    }
    return true; // game is over
  }

export const checkGameWon = (gridData) => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (gridData[row][col].value === 16) {
          return true; // game is won if there is a cell with 2048
        }
      }
    }
    return false; // game is not won
  }



