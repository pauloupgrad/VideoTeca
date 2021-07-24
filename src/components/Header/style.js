import styled from 'styled-components';

export const HeaderTop = styled.header`
    width: 100%;
    height: 52px;
    background-color: var(--cor-secondary);
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--cor-white);     
`;

export const BoxLeft = styled.div`
    width: 11%;        
    display: flex;
    align-items: center;
    justify-content: space-between; 
    i{
        color: var(--cor-white);
        font-size: 1.4rem;
        margin-right: 20px;
    }  
`;
export const ImgResponsive = styled.img`
    max-width: 100%;
`;

//Search
export const Search = styled.div`
    background-color: var(--cor-primary);
    width: 45%;
    height: 30px;
    border: 1px solid rgb(78, 76, 76); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-right-radius: 8px; 
    border-top-right-radius: 8px; 
    overflow: hidden;
    input{
        width: 90%;
        height: 30px;
        background: var(--cor-primary);
        border: none;
        color: var(--cor-white);
        padding: 0px 10px;
    }
    .ico_search{
        width: 10%;
        background: #2c2c2c;
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all ease .4s;
        i{
            color: rgb(78, 76, 76);            
        }
        :hover i{
            color: rgb(114, 111, 111);
        }     
    }        

`;
// BOX RIGHT
export const BoxRight = styled.div`
    width: 15%;        
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 35px;
        border-radius: 50%;
    }
    i{
        color: var(--cor-white);
        font-size: 1.2rem;
        transition: all ease .4s;
        :hover{
            color: rgb(114, 111, 111);
        } 
    }       
`;