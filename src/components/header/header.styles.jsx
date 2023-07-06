import styled from 'styled-components';

// HeaderContainer component for positioning and styling the header
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

    // The following media queries adjust the width of the header based on the viewport width and orientation
    @media screen and (max-width: 768px) and (orientation: landscape) {
        max-width: 20vw;
    }

    @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
        max-width: 20vw;
        width: 30vw;
        flex-shrink: 4;
    }

    @media screen and (max-width: 300px) and (orientation: portrait) {
        padding: 0;
    }
`;


// ShortInstructions component for styling and positioning the short instructions text
export const ShortInstructions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // Hide the instructions text on screens with max-width of 768px
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
