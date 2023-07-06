import React from 'react';
import Button from '../button/button.component';
import { ButtonContainer } from './headerButtons.styles.jsx';
import { useOverlays } from '../../contexts/overlaysContext';
import { useGameContext } from '../../contexts/gameContext'

// HeaderButtons is a functional component that renders two buttons: "How to Play" and "New Game"
const HeaderButtons = () => {
    // We use the toggleInstructions function from the overlaysContext
    const { toggleInstructions } = useOverlays();

    // We use the gameDispatch function from the gameContext
    const { gameDispatch } = useGameContext();

    return (
        // ButtonContainer is a styled component that applies styles to its child components
        <ButtonContainer>                
            {/* The "How to Play" button calls toggleInstructions when clicked */}
            <Button label="How to Play" onClick={toggleInstructions}/>

            {/* The "New Game" button dispatches the 'INITIALIZE_GRID' action to gameDispatch when clicked */}
            <Button label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })} />
        </ButtonContainer>
    )
};

export default HeaderButtons;
