import styled from 'styled-components';

export const ScoreBoardContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(0.5 * var(--header-height));
  font-weight: 600;
  padding: 0;

  p {
    margin: 0;
    margini-bottom: 0.5rem;
  }

  @media (orientation:landscape) {
    order: 1;  
    flex-direction: column;
  }
`;
