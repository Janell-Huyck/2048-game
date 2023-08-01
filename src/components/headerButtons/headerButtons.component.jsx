import React, {forwardRef} from 'react';
import Button from '../button/button.component';
import { ButtonContainer } from './headerButtons.styles.jsx';
import { useGameContext } from '../../contexts/gameContext'

// HeaderButtons is a functional component that renders two buttons: "How to Play" and "New Game"
const HeaderButtons = forwardRef(({buttonAutoFocus}, ref) => {
    // We use the gameState object from the gameContext
    const { gameDispatch } = useGameContext();

    const showInstructions = () => {
        //set show instructions to true
        gameDispatch({ type: 'SHOW_INSTRUCTIONS' });
    }

    return (
        // ButtonContainer is a styled component that applies styles to its child components
        <ButtonContainer ref={ref}>                
            <Button label="Instructions" onClick={showInstructions}/>
            <Button label="Restart" buttonAutoFocus={buttonAutoFocus} onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })} />
        </ButtonContainer>
    )
});

export default HeaderButtons;
