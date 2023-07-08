import React from 'react';
import Grid from '../../components/grid/grid.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import InstructionModal from '../../components/instructionModal/instructionModal.component';
import Header from '../../components/header/header.component';
import GameOver from '../../components/gameOver/gameOver.component';
import { HomeContainer } from './home.styles.jsx';
import { useGameContext } from '../../contexts/gameContext';

const Home = () => {
    const { gameState } = useGameContext();
    const { showInstructions, showGameOver, gameActive } = gameState;

    return (
        <HomeContainer>
            <Header buttonAutoFocus={!gameActive && !showInstructions && !showGameOver} />
            {showInstructions && <InstructionModal />}
            {showGameOver && <GameOver />}
            <span className='grid-score-combo'>
                <Grid/>
                <ScoreBoard />
            </span>
        </HomeContainer>
    );
}

export default Home;