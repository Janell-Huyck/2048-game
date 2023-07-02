import React from 'react';
import Grid from '../components/grid';
import ScoreBoard from '../components/scoreboard';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>2048</h1>
            <p>Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</p>
            <Grid/>
            <ScoreBoard />
        </div>
    );
    }

export default Home;