// Stores the state of the game including:
// gridData: 2D array of numbers representing the grid
// score: current score
// highScore: highest score achieved
// gameActive: boolean to indicate if game is active
// showGameOver: boolean to indicate if game over modal should be shown
// showInstructions: boolean to indicate if instructions modal should be shown
// didMove: boolean to indicate if tiles moved during last move
// wonGame: boolean to indicate if game has been won
import React, { createContext, useReducer, useContext } from 'react';
import { initializeGrid, merge, checkGameOver, transpose, addNewNumber, checkGameWon } from '../utils/gameUtils';

const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_TILES':
      const direction = action.payload;
      const { gridData, score, highScore } = state;
      let newGridData = [];
      let points = 0;
      let newDidMove = false;
      let processedGridData;

      // Handle move directions
      switch (direction) {
        case 'UP':
        case 'DOWN':
          processedGridData = transpose([...gridData]);
          if (direction === 'DOWN') {
            processedGridData = processedGridData.map(row => [...row].reverse());
          }
          break;
        case 'LEFT':
        case 'RIGHT':
          processedGridData = [...gridData];
          if (direction === 'RIGHT') {
            processedGridData = processedGridData.map(row => [...row].reverse());
          }
          break;
        default:
          return state;
      }

      // Merge tiles and add points
      processedGridData.forEach(row => {
        const mergeResult = merge([...row]);
        newGridData.push(direction === 'DOWN' || direction === 'RIGHT' ? mergeResult.mergedData.reverse() : mergeResult.mergedData);
        points += mergeResult.points;
      });

      if (direction === 'UP' || direction === 'DOWN') {
        newGridData = transpose(newGridData);
      }

      let newScore = score + points;
      let newHighScore = newScore > highScore ? newScore : highScore;

      // Store high score to localStorage
      if (newHighScore > highScore) {
        localStorage.setItem('highScore', newHighScore);
      }

      if (JSON.stringify(gridData) !== JSON.stringify(newGridData)) {
        newDidMove = true;
      }
      return {
        ...state,
        gridData: newGridData,
        score: newScore,
        highScore: newHighScore,
        didMove: newDidMove,
      };
    case 'INITIALIZE_GRID':
      return {
        ...state,
        gridData: initializeGrid(),
        wonGame: false,
        score: 0,
        didMove: false,
        showGameOver: false,
        gameActive: true,
        gameOver: false,
      };
    case 'CHECK_GAME_OVER':
      let gameOver = checkGameOver(state.gridData);
      if (gameOver) {
        return { ...state, gameActive: false, wonGame: false, showGameOver: true, gameOver: true}
      } else {
        return { ...state, gameOver: false}
      }

      case 'CHECK_GAME_WON':
        const wonGame = checkGameWon(state.gridData);
        if (wonGame) {
          return { ...state, wonGame: true, showGameOver: true, gameActive: false, gameOver: true}
        }
        else {
        return { ...state, wonGame: false}
      }
    case 'ADD_NEW_NUMBER':
      return {
          ...state,
          gridData: addNewNumber(state.gridData),
      };
    case 'RESET_DID_MOVE':
      return {
        ...state,
        didMove: false,
      };
    case 'ACTIVATE_GAME':
      if (state.gameOver) {
        return {
          ...state,
          gameActive: false,
        };
      } else {
      return {
        ...state,
        gameActive: true,
      }};
    case 'DEACTIVATE_GAME':
      return {
        ...state,
        gameActive: false,
      };
    case 'SHOW_INSTRUCTIONS':
      return {
        ...state,
        showInstructions: true,
      };
    case 'HIDE_INSTRUCTIONS':
      return {
        ...state,
        showInstructions: false,
      };
    case 'SHOW_GAME_OVER':
      return {
        ...state,
        showGameOver: true,
      };
    case 'HIDE_GAME_OVER':
      return {
        ...state,
        showGameOver: false,
      };
    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, {
    gridData: initializeGrid(),
    showGameOver: false,
    wonGame: false,
    score: 0,
    highScore: localStorage.getItem('highScore') || 0,
    didMove: false,
    gameActive: true,
    showInstructions: false,
    gameOver: false,
  });

  return (
    <GameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => useContext(GameContext);
export default GameContext;
