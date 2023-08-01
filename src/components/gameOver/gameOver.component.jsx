import React from 'react';
import Button from '../button/button.component';
import Modal from '../modal/modal.component';
import { useGameContext } from '../../contexts/gameContext';

const GameOver = () => {
    const { gameState, gameDispatch } = useGameContext();
    return (
        <Modal >
          <h1 className="game-over-message">{ gameState.wonGame ? "You Won!" : "Game Over!" }</h1>
          <br />
          <br />
          <Button buttonAutoFocus={true} label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })}/>
        </Modal>
    );
};

export default GameOver;
