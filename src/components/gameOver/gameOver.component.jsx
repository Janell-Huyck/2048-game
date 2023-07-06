// Importing necessary components and contexts
import React from 'react';
import Button from '../button/button.component';
import { useGameContext } from '../../contexts/gameContext';
import './gameOver.styles.css';

// GameOver Component
const GameOver = () => {

    // Using GameContext to get gameState and gameDispatch
    const { gameState, gameDispatch } = useGameContext();

    // Handler for click event on game-over-overlay
    // Stops event propagation to prevent triggering any potential parent handler 
    const handleOverlayClick = (event) => {
      event.stopPropagation();
    }

    // Component returns a div with gameOver message and a "New Game" button
    return (
        <div className="game-over-overlay" onClick={handleOverlayClick}>
          <div className="game-over-message">{ gameState.wonGame ? "You Won!" : "Game Over!" }</div>
          <br />
          <br />
          <Button className="new-game-button" label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })}/>
        </div>
    )
};

// Exporting the GameOver component to be used in other parts of our application
export default GameOver;
