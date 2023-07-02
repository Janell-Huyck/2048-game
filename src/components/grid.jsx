import React, { useEffect, useContext, useCallback } from 'react';
import Cell from './cell';
import './grid.css';
import GameContext from '../contexts/gameContext';

const Grid = () => {
  const { gameState, gameDispatch } = useContext(GameContext);
  const { didMove } = gameState;

  const handleKeyDown = useCallback((event) => {
    let direction;
    switch(event.key) {
      case 'ArrowUp':
      case 'Up':
      case 'w':
      case 'W':
        direction = 'UP';
        break;
      case 'ArrowDown':
      case 'Down':
      case 's':
      case 'S':
        direction = 'DOWN';
        break;
      case 'ArrowLeft':
      case 'Left':
      case 'a':
      case 'A':
        direction = 'LEFT';
        break;
      case 'ArrowRight':
      case 'Right':
      case 'd':
      case 'D':
        direction = 'RIGHT';
        break;
      default:
        console.log("Invalid key pressed");
        return;
    }

    
    gameDispatch({ type: 'MOVE_TILES', payload: direction });
  }, [gameDispatch]); 

  useEffect(() => {
    if (didMove) {
      gameDispatch({ type: 'ADD_NEW_NUMBER' });
      gameDispatch({ type: 'CHECK_GAME_WON' });
      gameDispatch({ type: 'CHECK_GAME_OVER' });
      gameDispatch({ type: 'RESET_DID_MOVE' });
    }
  }, [didMove, gameDispatch]); 

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); 
  
  return (
    <div className="grid" data-testid="grid">
      {gameState.gridData.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} value={cell.value}  isNew={cell.isNew} />
        ))
      )}
     
    </div>
  );
};

export default Grid;
