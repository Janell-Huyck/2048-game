import React from 'react';
import { useGameContext } from '../../contexts/gameContext';
import { ScoreBoardContainer } from './scoreboard.styles.jsx';

const ScoreBoard = () => {
  const { gameState } = useGameContext();
  const { score, highScore } = gameState;

  return (
    <ScoreBoardContainer>
      <div>
        <p>Score: {score}</p>
      </div>
      <div>
        <p>High Score: {highScore}</p>
      </div>
    </ScoreBoardContainer>
  );
}

export default ScoreBoard;
