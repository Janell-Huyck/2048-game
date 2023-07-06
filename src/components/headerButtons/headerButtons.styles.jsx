import styled from 'styled-components';

export const ButtonContainer = styled.div`
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1200px) and (orientation: landscape) {
        flex-direction: column;
        justify-content: space-around;
    }
`;
