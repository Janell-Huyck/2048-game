# 2048 Game Utilities

This repository contains utility functions for the 2048 game, a popular game where the player combines tiles on a grid to create a tile with the number 2048.

## Overview

The 2048 game involves a 4x4 grid and the objective is to combine tiles until you reach a tile with a value of 2048. Each turn, a new tile with a value of 2 or 4 appears in an empty spot on the board. The player can slide tiles either up, down, left or right. When two tiles with the same number touch, they merge into one with their values added together.

## Utility Functions

- `merge(row)`: This function takes in a row of numbers and performs the merging operation as per the rules of the game. It merges identical numbers and moves the resultant merged number to the left of the row.

- `addNewNumber(grid)`: This function takes in the current state of the grid and adds a new number (either 2 or 4) at a random empty spot on the grid.

- `checkGameOver(grid)`: This function checks if the game is over. The game is considered to be over if there are no empty spots left on the grid and there are no possible merges left in any row or column.

- `transpose(grid)`: This function transposes the given grid (i.e., converts rows into columns and vice versa). This is particularly useful in the 2048 game when we need to slide and merge tiles vertically.

- `initializeGrid()`: This function returns a new 4x4 grid with two random cells initialized with a number either 2 or 4.

## Testing

The functionality of these utilities is ensured by a comprehensive set of tests written using Jest. To run the tests, use the following command: 

```bash
npm test
