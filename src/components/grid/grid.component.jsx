import React, { useEffect } from 'react';
import Cell from '../cell/cell.component';
import { GridContainer } from './grid.styles.jsx';
import { useGameContext } from '../../contexts/gameContext';
import { handleKeyInput } from '../../utils/keyInputUtils';
import { useSwipe } from '../../contexts/swipeContext';

const Grid = () => {

  const { gameState, gameDispatch } = useGameContext();
  const { gridData, didMove, showGameOver, gameActive, wonGame } = gameState;
  const { handleTouchStart, handleSwipe } = useSwipe();

  // Add keyboard event listener to move tiles
  useEffect(() => {
    if (!gameActive) {
      return;
    }

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
  }, [gameDispatch, gameState, gameActive]);

  // Add touch event listeners to move tiles on swipe
  useEffect(() => {
    if (!gameActive) {
      return;
    }
    const touchEndHandler = (event) => {
      const direction = handleSwipe(event);
      if (direction) {
        gameDispatch({ type: 'MOVE_TILES', payload: direction });
      }
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', touchEndHandler, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [gameDispatch, handleSwipe, handleTouchStart, gameActive]);

  useEffect(() => {
    if ( !gameActive) {
      return;
    }
    if (didMove) {
      gameDispatch({ type: 'CHECK_GAME_OVER' });
      gameDispatch({ type: 'CHECK_GAME_WON' });
      gameDispatch({ type: 'ADD_NEW_NUMBER' });
      gameDispatch({ type: 'RESET_DID_MOVE' });
    }
  }, [didMove, gameDispatch, gameState, showGameOver, wonGame, gameActive]);


  return (  
    <GridContainer data-testid="grid" id="grid" >
      {gridData.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} value={cell.value}  isNew={cell.isNew} />
        ))
      )}
    </GridContainer>
  );
};

export default Grid;
