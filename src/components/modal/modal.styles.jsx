import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100 * var(--vw));
  height: calc(100 * var(--vh));
  max-height: 100%;
  background: rgba(238, 228, 218, 0.8);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
  z-index: 1;
`;

export const ModalContent = styled.div`
    box-sizing: border-box;
    max-width: 90%; 
    min-width: 60%; 
    min-height: 60%; 
    position: relative;
    font-size: 1em;
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    background-color: #fefefe;
    margin: auto;
    padding: auto;
    border: 1px solid #888;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    z-index: 2;


    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 1rem;
    }

    p, ul {
      display: inline-block;
      margin: 0;
      padding: 0;
      text-align: center;
      width: 100%;
    }
`;

export const CloseButton = styled.button`
    background-color: #bbada0;
    border: 1px solid #bbada0;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 50px;
    align-self: flex-end;
    margin: 10px;

    &:hover, &:focus {
        background-color: #e2cdba;
        border-color: #e2cdba;
        color: #bbada0;
        cursor: pointer;
        outline: none;
      }

    &:focus {
        text-decoration: none;
    }
`;







