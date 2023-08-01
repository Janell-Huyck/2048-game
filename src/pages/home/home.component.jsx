// pages/Home/Home.jsx
import React from 'react';
import Grid from '../../components/grid/grid.component';
import InstructionModal from '../../components/instructionModal/instructionModal.component';
import Header from '../../components/header/header.component';
import GameOver from '../../components/gameOver/gameOver.component';
import { HomeContainer } from './home.styles.jsx';
import { useGameContext } from '../../contexts/gameContext';
import { useViewportSettings } from '../../hooks/useViewportSettings';

const Home = () => {
    const { gameState } = useGameContext();
    const { showInstructions, showGameOver, gameActive } = gameState;
    const isSizeCalculated = useViewportSettings();

    return (
        <HomeContainer>
            {showInstructions && <InstructionModal />}
            {showGameOver && <GameOver />}
            {isSizeCalculated && (
                <>
                    <Header buttonAutoFocus={!gameActive && !showInstructions && !showGameOver} />
                    <Grid />
                </>
            )}
        </HomeContainer>
    );
    
}

export default Home;
