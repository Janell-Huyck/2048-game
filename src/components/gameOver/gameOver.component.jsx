import React from 'react';
import Button from '../button/button.component';
import { useGameContext } from '../../contexts/gameContext';
import './gameOver.styles.css';


const GameOver = () => {
    const { gameState, gameDispatch } = useGameContext();
    const handleOverlayClick = (event) => {
      event.stopPropagation();  // This prevents the click event from bubbling up to the swipe handler
    }
    return (
        <div className="game-over-overlay" onClick={handleOverlayClick}>
          <div className="game-over-message">{ gameState.wonGame ? "You Won!" : "Game Over!" }</div>
          <br />
          <br />
          <Button className="new-game-button" label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })}/>
        </div>
    )
};

export default GameOver;