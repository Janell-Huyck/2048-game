import React, {useContext} from 'react';
import Button from '../button/button.component';
import GameContext from '../../contexts/gameContext';
import './gameOver.styles.css';


const GameOver = () => {
    const { gameState, gameDispatch } = useContext(GameContext);
    return (
        <div className="game-over-overlay">
          <div className="game-over-message">{ gameState.wonGame ? "You Won!" : "Game Over!" }</div>
          <br />
          <br />
          <Button className="new-game-button" label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })}/>
        </div>
    )
};

export default GameOver;