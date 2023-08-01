import React from 'react';
import Title from '../title/title.component';
import HeaderButtons from '../headerButtons/headerButtons.component';
import ScoreBoard from '../scoreboard/scoreboard.component';
import { HeaderContainer } from './header.styles';

const Header = ({buttonAutoFocus}) => {

    return (
        <HeaderContainer id="header">
            <Title  /> 
            <ScoreBoard />
            <HeaderButtons buttonAutoFocus={buttonAutoFocus}/> 
        </HeaderContainer>
    );
}

export default Header;
