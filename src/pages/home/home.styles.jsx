import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: space-around;
    min-height: -webkit-fill-available;
    min-width: -webkit-fill-available;


  @media (orientation:landscape) {
    flex-direction: row; 
  }
`;
