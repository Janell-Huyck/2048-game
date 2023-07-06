import React, { useEffect } from 'react';
import Cell from '../cell/cell.component';
import GameOver from '../gameOver/gameOver.component';
import { GridContainer } from './grid.styles.jsx';
import { useGameContext } from '../../contexts/gameContext';
import { handleKeyInput } from '../../utils/keyInputUtils';
import { useSwipe } from '../../contexts/swipeContext';

const Grid = () => {
  const { gameState, gameDispatch } = useGameContext();
  const { gridData, didMove, isGameOver } = gameState;
  const { handleTouchStart, handleSwipe } = useSwipe();

  useEffect(() => {
    const keydownHandler = (event) => {
      if (isGameOver) {
        return;
      }

      const direction = handleKeyInput(event);

      if (direction) {
        gameDispatch({ type: 'MOVE_TILES', payload: direction });
      }
    };

    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, [gameDispatch, gameState, isGameOver]);

  useEffect(() => {
    if (isGameOver) {
      return;
    }

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
  }, [gameDispatch, handleSwipe, handleTouchStart, isGameOver]); // Added dependencies

  useEffect(() => {
    const { isGameOver, wonGame } = gameState;
    if (isGameOver || wonGame) {
      return;
    }
    if (didMove) {
      gameDispatch({ type: 'ADD_NEW_NUMBER' });
      gameDispatch({ type: 'CHECK_GAME_OVER' });
      gameDispatch({ type: 'CHECK_GAME_WON' });
      gameDispatch({ type: 'RESET_DID_MOVE' });
    }
  }, [didMove, gameDispatch, gameState]); 

  
  return (
    <GridContainer data-testid="grid" id="grid" >
      {gridData.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} value={cell.value}  isNew={cell.isNew} />
        ))
      )}
      {isGameOver && <GameOver />}
    </GridContainer>
  );
};

export default Grid;
