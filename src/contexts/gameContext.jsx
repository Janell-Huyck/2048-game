import React, { createContext, useReducer} from 'react';
import { initializeGrid, merge, checkGameOver, transpose, addNewNumber } from '../gameUtils';

const GameContext = createContext();
export default GameContext;

const gameReducer = (state, action) => {

    switch (action.type) {
        case 'MOVE_TILES': 
            const direction = action.payload;
            const { gridData } = state;
            let newGridData;
            switch (direction) {
                case 'UP':
                    // Transpose, merge, then transpose back
                    newGridData = transpose([...gridData]);
                    newGridData = newGridData.map(row => merge([...row]));
                    newGridData = transpose(newGridData.map(row => [...row]));
                    break;         
                case 'DOWN':
                    newGridData = transpose([...gridData]);
                    newGridData = newGridData.map(row => merge([...row].reverse()).reverse());
                    newGridData = transpose(newGridData.map(row => [...row]));
                    break;
                case 'LEFT':
                    newGridData = gridData.map(row => merge([...row]));
                    break;
                case 'RIGHT':
                    newGridData = gridData.map(row => merge([...row].reverse()).reverse());
                    break;
                default:
                    break;
            }
            return { ...state, gridData: newGridData };    
        case 'INITIALIZE_GRID':
            return {
            ...state,
            gridData: initializeGrid(),
            isGameOver: false,
            };
        case 'CHECK_GAME_OVER':
        const isGameOver = checkGameOver(state.gridData);
        return { ...state, isGameOver: isGameOver}
        case 'ADD_NEW_NUMBER':
        return {
            ...state,
            gridData: addNewNumber(state.gridData),
        };
        default:
        return state;
        
    }
  }
  
  
export const GameProvider = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, {
    gridData: initializeGrid(),
    isGameOver: false,
  });

  return (
    <GameContext.Provider value={[gameState, gameDispatch]}>
      {children}
    </GameContext.Provider>
  );
}
