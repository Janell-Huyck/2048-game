import React, { useEffect, useContext } from 'react';
import Cell from '../cell/cell.component';
import './grid.styles.css';
import GameContext from '../../contexts/gameContext';
import { handleKeyInput } from '../../utils/keyInputUtils';
import { useSwipe } from '../../contexts/swipeContext';

const Grid = () => {
  const { gameState, gameDispatch } = useContext(GameContext);
  const { didMove } = gameState;
  const { handleTouchStart, handleSwipe } = useSwipe();

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
    const touchEndHandler = (event) => {
      const direction = handleSwipe(event);
      if (direction) {
        gameDispatch({ type: 'MOVE_TILES', payload: direction });
      }
    };
  
    // Add event listener
    const options = { passive: false };
    window.addEventListener('touchstart', handleTouchStart, options);
    window.addEventListener('touchend', touchEndHandler, options);
  
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [gameDispatch, handleSwipe, handleTouchStart]); // Added dependencies

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
