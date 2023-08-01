import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: min(var(--header-height), calc(100 * var(--vh) - 20px));
    width: min(var(--header-width), calc(100 * var(--vw) - 20px));
    margin: auto 0;
`;
