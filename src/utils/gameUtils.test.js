import { merge, addNewNumber, checkGameOver, transpose, initializeGrid } from './gameUtils';

describe('gameUtils', () => {
  // initial grid data for testing
  const gridData = [
    [0, 2, 0, 2],
    [4, 0, 0, 0],
    [0, 2, 2, 0],
    [0, 0, 0, 0]
  ];

  // Merge function tests
  describe('merge function', () => {
    it.each([
      { input: [0, 2, 0, 2], output: [4, 0, 0, 0] },
      { input: [2, 2, 2, 2], output: [4, 4, 0, 0] },
      { input: [0, 0, 0, 0], output: [0, 0, 0, 0] },
      { input: [2, 0, 2, 2], output: [4, 2, 0, 0] },
    ])('should correctly merge and slide tiles', ({ input, output }) => {
      expect(merge(input)).toEqual(output);
    });
  });

  // Helper function to flatten a grid and count the non-zero numbers
  const countNonZero = grid => grid.flat().filter(num => num !== 0).length;

  // Add new number function tests
  describe('addNewNumber function', () => {
    it('should add a new number (2 or 4) to the grid in a cell that was previously 0', () => {
      const copiedGrid = JSON.parse(JSON.stringify(gridData));
      const newGrid = addNewNumber(copiedGrid);
  
      // Find the index of the newly added number
      const flatOriginal = copiedGrid.flat();
      const flatNew = newGrid.flat();
      const addedIndex = flatNew.findIndex((element, index) => flatOriginal[index] === 0 && element !== 0);
  
      // Check that exactly one new number has been added
      expect(countNonZero(newGrid)).toBe(countNonZero(copiedGrid) + 1);
  
      // Check that the new number is either 2 or 4, and was added at an index that was previously 0
      expect([2, 4]).toContain(flatNew[addedIndex]);
    });

    it('should not change the grid when there are no empty cells', () => {
      const fullGrid = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      const newGrid = addNewNumber(fullGrid);
  
      // Grid should remain the same since there's no room for a new number
      expect(newGrid).toEqual(fullGrid);
    });

    it('should add a number (2 or 4) to an empty grid', () => {
      const emptyGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const newGrid = addNewNumber(emptyGrid);
  
      // Check that exactly one new number (2, 4) has been added
      expect(countNonZero(newGrid)).toBe(1);
      expect([2, 4]).toContain(newGrid.flat().find(num => num !== 0));
    });
  });

  
  // Check game over function tests
  describe('checkGameOver function checks if the game is over', () => {
    it('should return false if the game is not over (has zero values)', () => {
      const gridWithZeros = [
        [2, 0, 2, 4],
        [4, 2, 4, 0],
        [2, 4, 0, 4],
        [4, 2, 4, 2]
      ];
      const gameOver = checkGameOver(gridWithZeros);
      expect(gameOver).toBe(false);
    });

    it('should return false if the game is not over (has adjacent equal numbers)', () => {
      const gridWithAdjacentEqualNumbers = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 2, 2]
      ];
      const gameOver = checkGameOver(gridWithAdjacentEqualNumbers);
      expect(gameOver).toBe(false);
    });

    it('should return true if the game is over', () => {
      const gameOverGrid = [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ];
      const gameOver = checkGameOver(gameOverGrid);
      expect(gameOver).toBe(true);
    })
  });


  // Transpose function tests
  describe('transpose function transposes the grid', () => {
    it('should transpose the grid', () => {
      const copiedGrid = JSON.parse(JSON.stringify(gridData));
      const transposedGrid = transpose(copiedGrid);
      expect(transposedGrid).toEqual([
        [0, 4, 0, 0],
        [2, 0, 2, 0],
        [0, 0, 2, 0],
        [2, 0, 0, 0]
      ]);
    });
  });


  // Initialize grid function tests
  describe('initializeGrid function initializes the grid', () => {
    it('should initialize the grid', () => {
      const grid = initializeGrid();
      expect(grid).not.toEqual(gridData);
    });
  })
})