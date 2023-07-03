import React, { useContext, useState } from 'react';
import Grid from '../../components/grid/grid.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import GameOver from '../../components/gameOver/gameOver.component';
import InstructionModal from '../../components/instructionModal/instructionModal.component';
import Button from '../../components/button/button.component';
import GameContext from '../../contexts/gameContext';
import './home.styles.css';

const Home = () => {
    const [showInstructionModal, setShowInstructionModal] = useState(false);

const { gameState } = useContext(GameContext);
  const { isGameOver } = gameState;
    return (
        <div className="home">
            <h1>2048</h1>
            <p>Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</p>
            <Button label="How to Play" onClick={() => setShowInstructionModal(true)}/>
            <br/>
            {showInstructionModal && <InstructionModal onClose={() => setShowInstructionModal(false)} />}
            <Grid/>
            <ScoreBoard />
            {isGameOver && <GameOver />}
        </div>
    );
    }

export default Home;