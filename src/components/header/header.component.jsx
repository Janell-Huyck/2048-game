import React from 'react';
import ShortInstructions from '../shortInstructions/shortInstructions.component';
import Title from '../title/title.component';
import HeaderButtons from '../headerButtons/headerButtons.component';
import { HeaderContainer } from './header.styles.jsx';

const Header = () => {

    return (
        <HeaderContainer>
            <Title />
            <ShortInstructions />
            <HeaderButtons />
        </HeaderContainer>
    );
}

export default Header;