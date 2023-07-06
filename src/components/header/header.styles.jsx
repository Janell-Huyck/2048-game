import styled from 'styled-components';

export const HeaderContainer = styled.div`
    order: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 10px;

    @media screen and (max-width: 768px) and (orientation: landscape) {
        max-width: 20vw;
    }

    @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
        max-width: 40vw;
        flex-shrink: 4;
    }
`;


export const ShortInstructions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;