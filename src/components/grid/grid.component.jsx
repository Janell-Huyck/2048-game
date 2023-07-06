import React, { useEffect } from 'react';
import Cell from '../cell/cell.component';
import GameOver from '../gameOver/gameOver.component';
import { GridContainer } from './grid.styles.jsx';
import { useGameContext } from '../../contexts/gameContext';
import { handleKeyInput } from '../../utils/keyInputUtils';
import { useSwipe } from '../../contexts/swipeContext';

// Main game grid component
const Grid = () => {
  // Use the game context to access the game state and dispatch function
  const { gameState, gameDispatch } = useGameContext();
  // Extract relevant state variables
  const { gridData, didMove, isGameOver } = gameState;
  // Swipe handlers
  const { handleTouchStart, handleSwipe } = useSwipe();

  // Add keyboard event listener to move tiles
  useEffect(() => {
    // Return early if the game is over
    if (isGameOver) {
      return;
    }
    // Event handler for keydown events
    const keydownHandler = (event) => {
      const direction = handleKeyInput(event);
      if (direction) {
        gameDispatch({ type: 'MOVE_TILES', payload: direction });
      }
    };
    document.addEventListener('keydown', keydownHandler);
    // Remove event listener on unmount
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, [gameDispatch, gameState, isGameOver]);

  // Add touch event listeners to move tiles on swipe
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
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', touchEndHandler, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [gameDispatch, handleSwipe, handleTouchStart, isGameOver]);

  // Update the game state after every move
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

  // Render the game grid and game over screen if the game is over
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
