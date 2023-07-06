import React from 'react';
import { useGameContext } from '../../contexts/gameContext';
import { ScoreBoardContainer } from './scoreboard.styles.jsx';

// ScoreBoard component displays current score and high score.
const ScoreBoard = () => {
  // Use game context to access the current game state
  const { gameState } = useGameContext();

  // Destructure score and highScore from gameState
  const { score, highScore } = gameState;

  return (
    <ScoreBoardContainer>
      <div>
        <p>Score</p>
        <p>{score}</p> {/* Display current score */}
      </div>
      <div>
        <p>High Score</p>
        <p>{highScore}</p> {/* Display high score */}
      </div>
    </ScoreBoardContainer>
  );
}

export default ScoreBoard;
