import styled from 'styled-components';

// The GridContainer styled component that gives the game grid its design and responsive behavior
export const GridContainer = styled.div`
  display: grid; // Use CSS grid for the layout
  grid-template-columns: repeat(4, 1fr); // Create a 4x4 grid
  gap: 10px; // Space between grid items
  padding: 10px; 
  box-sizing: border-box;
  background-color: #bbada0;
  border-radius: 10px;
  margin: auto; 
  max-width: 100%;
  max-height: 100%;

  // Responsive behavior for screens up to 768px wide
  @media (max-width: 768px) {
    order: 3;
    // Maintain aspect ratio and fill up to 90% of the width or height
    width: min(90vw, 90vh, 100%);
    height: min(90vw, 90vh, 100%);
    margin: auto;
  }

  // Responsive behavior for screens larger than 768px
  @media screen and (min-width: 769px) {
    order: 2;
    // Maintain aspect ratio and fill up to 60% of the width or height, up to a max of 500px
    height: min(500px, 60vw);
    width: min(500px, 60vw);
  }

  // Landscape orientation behavior for screens up to 768px wide
  @media screen and (max-width: 768px) and (orientation: landscape) {
    align-self: center;
    // Maintain aspect ratio and fill up to 90% of the width or height
    width: min(80vw, 80vh, 100%);
    height: min(80vw, 80vh, 100%);
    padding: 10px;
    margin: 10px;
  }

  // Landscape orientation behavior for screens between 769px and 1281px
  @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
    margin: auto;
    // Maintain aspect ratio and fill up to 90% of the width or height
    width: min(90vw, 90vh, 100%);
    height: min(90vw, 90vh, 100%);
    padding: 10px;
  }
`;
