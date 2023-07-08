import React from 'react';
import ShortInstructions from '../shortInstructions/shortInstructions.component';
import Title from '../title/title.component';
import HeaderButtons from '../headerButtons/headerButtons.component';
import { HeaderContainer } from './header.styles.jsx';

// The Header functional component for displaying the game's title, instructions, and control buttons
const Header = ({buttonAutoFocus}) => {
    return (
        // Use HeaderContainer styled component for layout
        <HeaderContainer>
            <Title /> 
            <ShortInstructions /> 
            <HeaderButtons buttonAutoFocus={buttonAutoFocus}/> 
        </HeaderContainer>
    );
}

export default Header;
