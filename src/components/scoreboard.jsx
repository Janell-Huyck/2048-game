import React, { useContext } from 'react';
import GameContext from '../contexts/gameContext';
import './scoreboard.css';

const ScoreBoard = () => {
  // Import the needed values from the context
  const { gameState } = useContext(GameContext);
  const { score, highScore } = gameState;
  

  return (
    <div className="score-board">
      <div className="score">
        <h4>Score</h4>
        <p>{score}</p>
      </div>
      <div className="high-score">
        <h4>High Score</h4>
        <p>{highScore}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;

