import styled from 'styled-components';

export const ButtonContainer = styled.div`
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 0 0 auto;
    margin: auto;

    @media (orientation:landscape) {
    order: 2;
    flex-direction: column;
}
`;



