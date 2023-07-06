import React from 'react';
import { useGameContext } from '../../contexts/gameContext';
import { ScoreBoardContainer } from './scoreboard.styles.jsx';

const ScoreBoard = () => {
  const { gameState } = useGameContext();
  const { score, highScore } = gameState;
  

  return (
    <ScoreBoardContainer>
      <div>
        <p>Score</p>
        <p>{score}</p>
      </div>
      <div>
        <p>High Score</p>
        <p>{highScore}</p>
      </div>
    </ScoreBoardContainer>
  );
}

export default ScoreBoard;

