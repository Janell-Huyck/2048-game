import React, {forwardRef} from 'react';
import Button from '../button/button.component';
import { ButtonContainer } from './headerButtons.styles.jsx';
import { useGameContext } from '../../contexts/gameContext'

const HeaderButtons = forwardRef(({buttonAutoFocus}, ref) => {
    const { gameDispatch } = useGameContext();
    const showInstructions = () => {
        gameDispatch({ type: 'SHOW_INSTRUCTIONS' });
    }

    return (
        <ButtonContainer ref={ref}>                
            <Button label="Instructions" onClick={showInstructions}/>
            <Button label="Restart" buttonAutoFocus={buttonAutoFocus} onClick={() => gameDispatch({ type: 'INITIALIZE_GRID' })} />
        </ButtonContainer>
    )
});

export default HeaderButtons;
