import React, { useEffect, useContext } from 'react';
import Cell from './cell';
import './grid.css';
import GameContext from '../contexts/gameContext';

const Grid = () => {
  const [gameState, gameDispatch] = useContext(GameContext);

  const handleKeyDown = (event) => {
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
    gameDispatch({ type: 'ADD_NEW_NUMBER' });
    gameDispatch({ type: 'CHECK_GAME_OVER' });
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);  // Removed gridData from the dependency array as the handler doesn't depend on it directly
  
  return (
    <div className="grid">
      {gameState.gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cellValue, colIndex) => (
            <Cell key={colIndex} value={cellValue} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
