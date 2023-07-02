import React, { useContext } from 'react';
import Grid from '../components/grid';
import ScoreBoard from '../components/scoreboard';
import GameOver from '../components/gameOver';
import GameContext from '../contexts/gameContext';
import './home.css';

const Home = () => {
const { gameState } = useContext(GameContext);
  const { isGameOver } = gameState;
    return (
        <div className="home">
            <h1>2048</h1>
            <p>Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</p>
            <Grid/>
            <ScoreBoard />
            {isGameOver && <GameOver />}
        </div>
    );
    }

export default Home;