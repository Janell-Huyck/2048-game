import React, { createContext, useReducer} from 'react';
import { initializeGrid, merge, checkGameOver, transpose, addNewNumber, checkGameWon } from '../utils/gameUtils';

const GameContext = createContext();
export default GameContext;

const gameReducer = (state, action) => {

    switch (action.type) {
      case 'MOVE_TILES':
        const direction = action.payload;
        const { gridData, score, highScore } = state;
        let newGridData = [];
        let points = 0;
        let newDidMove = false;

        let processedGridData;
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
            break;
        }

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
          isGameOver: false,
          wonGame: false,
          score: 0,
          didMove: false,
          };
      case 'CHECK_GAME_OVER':
        const isGameOver = checkGameOver(state.gridData);
        return { ...state, isGameOver: isGameOver};
      case 'CHECK_GAME_WON':
        // Check if any cell has the value 2048
        const wonGame = checkGameWon(state.gridData);
        return { ...state, wonGame: wonGame}
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
      default:
      return state;
        
    }
  }
  
  
export const GameProvider = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, {
    gridData: initializeGrid(),
    isGameOver: false,
    wonGame: false,
    score: 0,
    highScore: localStorage.getItem('highScore') || 0,
    didMove: false,
  });

  return (
    <GameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
}
