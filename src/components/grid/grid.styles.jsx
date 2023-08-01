import styled from 'styled-components';

export const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px; 
  box-sizing: border-box;
  background-color: #bbada0;
  border-radius: 10px;
  margin: auto; 
  
  width: var(--grid-size);
  height: var(--grid-size);
  flex-shrink: 0;


  @media (orientation:landscape) {
    order: 2;  
  }
`;
