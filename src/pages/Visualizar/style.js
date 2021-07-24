import styled from 'styled-components';


export const BoxGeral = styled.div`
    width: 100vw;
    height: calc(100vh - 52px);       
    display: flex;
    padding:40px;
    justify-content: space-between;
`;

export const BoxVideoInfo = styled.div`
    width: 855px;
    display: flex;
    flex-direction: column;
    color: var(--cor-white);
`;
export const BoxSidebar = styled.div`
    background-color: var(--cor-secondary);
    height: 565px;
    width: 400px;
    overflow-y: auto;
    color: var(--cor-white);
`;