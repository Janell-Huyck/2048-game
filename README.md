# 2048 Game - React Implementation

This repository contains an implementation of the popular game 2048, created using React.js, a JavaScript library for building user interfaces.

## About The Game

The 2048 game is a single-player sliding block puzzle game designed by Italian web developer Gabriele Cirulli. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.

## Project Description

This project recreates the 2048 game using React.js and utilizes the context API for state management. The state in this context refers to the status of the game board at any given point in time. 

## Main Components

This application primarily consists of these main components:

- `GameBoard`: This component is responsible for rendering the game's grid based on the current state of the game. 

- `ScoreBoard`: This component displays the player's current score.

- `GameOver`: This component is rendered when the game state indicates that no further moves are possible.

## Game Utilities

The game utilities are a set of functions that contain the core logic of the game. They include:

- `merge`: This function merges identical numbers in a row and moves them to the left of the row.

- `addNewNumber`: This function adds a new tile with a value of 2 or 4 at a random empty spot on the grid.

- `transpose`: This function switches rows into columns and vice versa, which is used when the player makes a vertical move.

- `initializeGrid`: This function creates a new 4x4 grid with two tiles initialized with a number (either 2 or 4).

- `checkGameOver`: This function checks if the game is over, which occurs when there are no empty spots on the grid and there are no possible merges of equal numbered tiles in the grid.
  
- `checkGameWon`: This function checks if the user has won the game.

## Running the Project

To run this project on your local machine, follow these steps:

1. Clone the repository to your machine:
    `git clone https://github.com/Janell-Huyck/2048-game.git`

2. Navigate into the project directory:
    `cd 2048-game`

3. Install the required dependencies:
    `npm install`

4. Start the project:
    `npm start`

You can now access the game at `localhost:3000`.

## Testing

Jest is used for running the tests in this project. To run the tests, use the command:
    `npm test`

## Contributing

Feel free to contribute to this project. Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
