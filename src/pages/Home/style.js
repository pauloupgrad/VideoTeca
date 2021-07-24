import styled from 'styled-components';

export const Table = styled.table`
     width: 100%;
     margin: 20px 0px;
     text-align: left;
     th{
       background-color: #069;
       color: #fff;
       padding: 6px;
     }
     td{
         background-color: #e6e6e6;
         padding: 6px;
         font-weight: 700;
        
     }
     td:first-child {
         text-align: center;
     }

     td:last-child {
         text-align: center;
         display: flex;
         align-items: center;
         justify-content: space-around;         
         .edit{
            color: #00d700;
            font-size: 1.3rem;
            text-decoration: none; 
            :hover{
                color: #009700;
            }
          } 
         .del{
            color: #ff5151;
            font-size: 1.3rem;
            text-decoration: none; 
            :hover{
                color: #ff0000;
            }
          } 

        }          
   
`;
export const BtnVis = styled.button`
    color: var(--cor-white);
    font-size: 1.4rem;
    cursor: pointer;
    width:50px;
    height: 30px;
    border-radius: 5px;
    background: #009eea;
    transition: all ease .4s;
    transform: scale(.9);
    border: 0; 
    :hover{
        background: #005e8a;
        transform: scale(1);
    }
`;
export const BtnEdit = styled.button`
    color: var(--cor-white);
    font-size: 1.3rem;
    cursor: pointer;
    background: #00d700;
    border-radius: 5px;
    width:50px;
    height: 30px;
    border: 0;
    transition: all ease .4s;
    transform: scale(.9);
    :hover{
        background: #009700;
        transform: scale(1);
    }
`;
export const BtnDel = styled.button`
    color: var(--cor-white);
    font-size: 1.3rem;    
    cursor: pointer;
    width:50px;
    height: 30px;
    background: #ff5151;
    border-radius: 5px;
    border: 0;
    transition: all ease .4s;
    transform: scale(.9);
    :hover{
        background: #ff0000;
        transform: scale(1);
    }
`;
export const Container = styled.div`
    width: 90%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.4); 
    text-align: center;   
`;

export const Title = styled.h1`
    font-size: 1.6rem; 
    text-transform: uppercase;
    color: #069;    
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const ButtonListar = styled.button`
    background-color: #00b700;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: 8px 10px;
    border-radius: 6px;    
    border: 1px solid transparent;
    transition: all ease .4s;
    cursor: pointer;
   
    :hover{
        background-color: transparent;
        border: 1px solid #00b700;
        color: #00b700;
    }
`;
export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    padding: 8px 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #badbcc;    
`;
export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    padding: 8px 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #f5c2c7;    
`;
