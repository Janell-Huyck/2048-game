import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;


    @media screen and (max-width: 768px) and (orientation: portrait) {
    flex-direction: column;
    }

    @media screen and (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between; 
    .grid-score-combo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    }

    @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: space-around; 
    .grid-score-combo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;  
        height: 100%; 
    }
    }

    @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between; 
    .grid-score-combo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;  
        height: 100%; 
    }
    }
`;





export const ScoreBox = styled.div`
    order: 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px) and (orientation: landscape) {
        order:2;
        flex-direction: column;
        justify-content: space-around;
    }
`;