import { merge, addNewNumber, checkGameOver, transpose, initializeGrid } from './utils/gameUtils';

describe('gameUtils', () => {
  // initial grid data for testing
  const gridData = [
    [{ value: 0, isNew: false }, { value: 2, isNew: false }, { value: 0, isNew: false }, { value: 2, isNew: false }],
    [{ value: 4, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }],
    [{ value: 0, isNew: false }, { value: 2, isNew: false }, { value: 2, isNew: false }, { value: 0, isNew: false }],
    [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }]
  ];

  // Merge function tests
  describe('merge function', () => {
    it.each([
      { input: [{ value: 0, isNew: false }, { value: 2, isNew: false }, { value: 0, isNew: false }, { value: 2, isNew: false }], output: [{ value: 4, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }] },
      { input: [{ value: 2, isNew: false }, { value: 2, isNew: false }, { value: 2, isNew: false }, { value: 2, isNew: false }], output: [{ value: 4, isNew: false }, { value: 4, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }] },
      { input: [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }], output: [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }] },
      { input: [{ value: 2, isNew: false }, { value: 0, isNew: false }, { value: 2, isNew: false }, { value: 2, isNew: false }], output: [{ value: 4, isNew: false }, { value: 2, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }] },
    ])('should correctly merge and slide tiles', ({ input, output }) => {
      expect(merge(input).mergedData).toEqual(output);
    });
  });



  // Helper function to flatten a grid and count the non-zero numbers
  const countNonZero = grid => grid.flat().filter(cell => cell.value !== 0).length;

  // Add new number function tests
  describe('addNewNumber function', () => {
    it('should add a new number (2 or 4) to the grid in a cell that was previously 0', () => {
      const copiedGrid = JSON.parse(JSON.stringify(gridData));
      const newGrid = addNewNumber(copiedGrid);

      // Find the index of the newly added number
      const flatOriginal = copiedGrid.flat();
      const flatNew = newGrid.flat();
      const addedIndex = flatNew.findIndex((cell, index) => flatOriginal[index].value === 0 && cell.value !== 0);

      // Check that exactly one new number has been added
      expect(countNonZero(newGrid)).toBe(countNonZero(copiedGrid) + 1);

      // Check that the new number is either 2 or 4, and was added at an index that was previously 0
      expect([2, 4]).toContain(flatNew[addedIndex].value);
      expect(flatNew[addedIndex].isNew).toBe(true);
    });

    it('should not change the grid when there are no empty cells', () => {
      const fullGrid = [
        [{ value: 2, isNew: false }, { value: 4, isNew: false }, { value: 2, isNew: false }, { value: 4, isNew: false }],
        [{ value: 4, isNew: false }, { value: 2, isNew: false }, { value: 4, isNew: false }, { value: 2, isNew: false }],
        [{ value: 2, isNew: false }, { value: 4, isNew: false }, { value: 2, isNew: false }, { value: 4, isNew: false }],
        [{ value: 4, isNew: false }, { value: 2, isNew: false }, { value: 4, isNew: false }, { value: 2, isNew: false }]
      ];
      const newGrid = addNewNumber(fullGrid);

      // Grid should remain the same since there's no room for a new number
      expect(newGrid).toEqual(fullGrid);
    });

    it('should add a number (2 or 4) to an empty grid', () => {
      const emptyGrid = [
        [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }],
        [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }],
        [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }],
        [{ value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }, { value: 0, isNew: false }]
      ];
      const newGrid = addNewNumber(emptyGrid);

      // Check that exactly one new number (2, 4) has been added
      expect(countNonZero(newGrid)).toBe(1);
      expect([2, 4]).toContain(newGrid.flat().find(cell => cell.value !== 0).value);
    });
  });


  // Check game over function tests
  describe('checkGameOver function checks if the game is over', () => {
    it('should return false if the game is not over (has zero values)', () => {
      const gridWithZeros = [
        [{value: 2, isNew: false}, {value: 0, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}, {value: 0, isNew: false}],
        [{value: 2, isNew: false}, {value: 4, isNew: false}, {value: 0, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}]
      ];
      const gameOver = checkGameOver(gridWithZeros);
      expect(gameOver).toBe(false);
    });

    it('should return false if the game is not over (has adjacent equal numbers)', () => {
      const gridWithAdjacentEqualNumbers = [
        [{value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}],
        [{value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 2, isNew: false}, {value: 2, isNew: false}]
      ];
      const gameOver = checkGameOver(gridWithAdjacentEqualNumbers);
      expect(gameOver).toBe(false);
    });

    it('should return true if the game is over', () => {
      const gameOverGrid = [
        [{value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}],
        [{value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}],
        [{value: 4, isNew: false}, {value: 2, isNew: false}, {value: 4, isNew: false}, {value: 2, isNew: false}]
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
        [{value: 0, isNew: false}, {value: 4, isNew: false}, {value: 0, isNew: false}, {value: 0, isNew: false}],
        [{value: 2, isNew: false}, {value: 0, isNew: false}, {value: 2, isNew: false}, {value: 0, isNew: false}],
        [{value: 0, isNew: false}, {value: 0, isNew: false}, {value: 2, isNew: false}, {value: 0, isNew: false}],
        [{value: 2, isNew: false}, {value: 0, isNew: false}, {value: 0, isNew: false}, {value: 0, isNew: false}]
      ]);
    });
  });



 // Initialize grid function tests
describe('initializeGrid function initializes the grid', () => {
  it('should initialize the grid with correct size', () => {
    const grid = initializeGrid();
    expect(grid.length).toBe(4);  // Check the grid has 4 rows
    grid.forEach(row => expect(row.length).toBe(4));  // Check each row has 4 cells
  });

  it('should initialize the grid with 2 cells having a value of 2 or 4', () => {
    const grid = initializeGrid();
    const nonZeroCells = grid.flat().filter(cell => cell.value !== 0);
    expect(nonZeroCells.length).toBe(2);  // Check there are exactly two non-zero cells
    nonZeroCells.forEach(cell => {
      expect([2, 4]).toContain(cell.value);  // Check the non-zero cells have values 2 or 4
      expect(cell.isNew).toBe(true);  // Check the non-zero cells are marked as new
    });
  });

  it('should initialize the grid with the rest cells having a value of 0 and not marked as new', () => {
    const grid = initializeGrid();
    const zeroCells = grid.flat().filter(cell => cell.value === 0);
    expect(zeroCells.length).toBe(14);  // Check there are exactly 14 zero cells (16 total - 2 non-zero)
    zeroCells.forEach(cell => expect(cell.isNew).toBe(false));  // Check the zero cells are not marked as new
  });
});

})