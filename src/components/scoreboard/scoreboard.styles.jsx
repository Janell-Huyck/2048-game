import styled from 'styled-components';

export const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  font-size: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  flex-shrink: 2;

  @media screen and (max-width: 768px) and (orientation: landscape) {
    flex-direction: column;
    max-width: 5rem;
    height: 100%
    margin: 2rem 0;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    align-self: flex-start;
  }

  @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: portrait) {
    flex-direction: row;
    max-width: 40%;
    height: 100%
    margin: 2rem 0;
    justify-content: space-between;
    align-items: space-between;
    padding: 2rem;
    align-self: flex-start;
  }

  @media screen and (min-width: 769px) and (max-width: 1281px) and (orientation: landscape) {
    flex-direction: column;
    max-width: 5rem;
    height: 100%
    margin: 2rem 0;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
  }
`;
