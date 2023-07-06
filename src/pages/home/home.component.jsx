import React from 'react';
import Grid from '../../components/grid/grid.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import InstructionModal from '../../components/instructionModal/instructionModal.component';
import { useOverlays } from '../../contexts/overlaysContext';
import Header from '../../components/header/header.component';
import { HomeContainer } from './home.styles.jsx';


const Home = () => {
    const { instructionsVisible } = useOverlays();
    return (
        <HomeContainer>
            <Header/>
            {instructionsVisible && <InstructionModal />}
            <span className='grid-score-combo'>
                <Grid/>
                <ScoreBoard />
            </span>
        </HomeContainer>
    );
}

export default Home;