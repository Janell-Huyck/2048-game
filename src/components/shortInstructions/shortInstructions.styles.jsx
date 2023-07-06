import styled from 'styled-components';

export const ShortInstructionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    @media screen and (max-width: 1200px) and (orientation: landscape) {
        display: none;
    }

    @media screen and (max-width: 768px) and (orientation: portrait) {
        display: none;
    }
`;