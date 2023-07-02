import React, { useEffect, useContext } from 'react';
import Cell from './cell';
import './grid.css';
import GameContext from '../contexts/gameContext';
import { handleKeyInput } from '../utils/inputUtils';

const Grid = () => {
  const { gameState, gameDispatch } = useContext(GameContext);
  const { didMove } = gameState;

  useEffect(() => {
    const keydownHandler = (event) => {
      const direction = handleKeyInput(event);

      if (direction) {
        gameDispatch({ type: 'MOVE_TILES', payload: direction });
      }
    };

    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, [gameDispatch]);

  useEffect(() => {
    if (didMove) {
      gameDispatch({ type: 'ADD_NEW_NUMBER' });
      gameDispatch({ type: 'CHECK_GAME_WON' });
      gameDispatch({ type: 'CHECK_GAME_OVER' });
      gameDispatch({ type: 'RESET_DID_MOVE' });
    }
  }, [didMove, gameDispatch]); 

  
  return (
    <div className="grid" data-testid="grid" id="grid" >
      {gameState.gridData.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} value={cell.value}  isNew={cell.isNew} />
        ))
      )}
    </div>
  );
};

export default Grid;
