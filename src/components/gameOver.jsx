import React, {useContext} from 'react';
import GameContext from '../contexts/gameContext';


const GameOver = () => {
    const { gameState, gameDispatch } = useContext(GameContext);
    return (
        <div className="game-over-overlay">
          <div className="game-over-message">{ gameState.wonGame ? "You Won!" : "Game Over!" }</div>
          <br />
          <br />
          <button className="new-game-button" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })}>New Game</button>
        </div>
    )
};

export default GameOver;