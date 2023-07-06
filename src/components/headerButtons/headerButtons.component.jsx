import React from 'react';
import Button from '../button/button.component';
import { ButtonContainer } from './headerButtons.styles.jsx';
import { useOverlays } from '../../contexts/overlaysContext';
import { useGameContext } from '../../contexts/gameContext'

const HeaderButtons = () => {
    const { toggleInstructions } = useOverlays();
    const { gameDispatch } = useGameContext();

    return (
        <ButtonContainer>                
            <Button label="How to Play" onClick={toggleInstructions}/>
            <Button label="New Game" onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })} />
        </ButtonContainer>
    )
};

export default HeaderButtons;