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
    flex: 1;

    // Media query for screens up to 1200px wide in landscape orientation.
    @media screen and (max-width: 1200px) and (orientation: landscape) {
        // Switch to column layout and space items evenly for these screens.
        flex-direction: column;
        justify-content: flex-end !important;
    }

    @media screen and (max-width: 1281px) and (orientation: landscape) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

