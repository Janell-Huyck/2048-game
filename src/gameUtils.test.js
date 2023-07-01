import { merge, addNewNumber, checkGameOver, transpose, initializeGrid } from './gameUtils';

describe('gameUtils', () => {
  // initial grid data for testing
  const gridData = [
    [0, 2, 0, 2],
    [4, 0, 0, 0],
    [0, 2, 2, 0],
    [0, 0, 0, 0]
  ];

  describe('merge function moves all tiles to the left', () => {
    it('should merge and slide the tiles to the left', () => {
      const mergedGrid = merge(gridData);
      expect(mergedGrid).toEqual([
        [4, 0, 0, 0],
        [4, 0, 0, 0],
        [4, 0, 0, 0],
        [0, 0, 0, 0]
      ]);
    });
  });

  describe('addNewNumber function adds a new number to the grid', () => {
    it('should add a new number to the grid', () => {
      const newGrid = addNewNumber(gridData);
      expect(newGrid).not.toEqual(gridData);
    });
  });

  describe('checkGameOver function checks if the game is over', () => {
    it('should return false if the game is not over', () => {
      const gameOver = checkGameOver(gridData);
      expect(gameOver).toBe(false);
    });
    it('should return true if the game is over', () => {
      const gameOver = checkGameOver([
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ]);
      expect(gameOver).toBe(true);
    })
  })

  describe('transpose function transposes the grid', () => {
    it('should transpose the grid', () => {
      const transposedGrid = transpose(gridData);
      expect(transposedGrid).toEqual([
        [0, 4, 0, 0],
        [2, 0, 2, 0],
        [0, 0, 2, 0],
        [2, 0, 0, 0]
      ]);
    });
  })

  describe('initializeGrid function initializes the grid', () => {
    it('should initialize the grid', () => {
      const grid = initializeGrid();
      expect(grid).not.toEqual(gridData);
    });
  })
})