import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #bbada0;
  border-radius: 10px;
  margin: auto;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: 768px) {
    order: 3;
    width: min(90vw, 90vh, 100%);
    height: min(90vw, 90vh, 100%);
    margin: auto;
  }

  @media screen and (min-width: 769px) {
    order: 2;
    height: min(500px, 60vw);
    width: min(500px, 60vw);
  }

  @media screen and (max-width: 768px) and (orientation: landscape) {
    align-self: center;
    width: min(90vw, 90vh, 100%);
    height: min(90vw, 90vh, 100%);
  }

  @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
    margin: auto;
    width: min(90vw, 90vh, 100%);
    height: min(90vw, 90vh, 100%);
  }
`;
