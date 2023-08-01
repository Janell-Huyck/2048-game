import styled from 'styled-components';

// ButtonContainer applies styling to the div elements where it's used.
export const ButtonContainer = styled.div`
    // CSS properties to center content and set full width.
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 0 0 auto;
    margin: auto;

    @media (orientation:landscape) {
    // CSS properties to center content and set full width.
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 0 0 auto;
}
`;



