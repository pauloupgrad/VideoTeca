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
         .vis{
            color: #009eea;
            font-size: 1.4rem;
            text-decoration: none; 
            :hover{
                color: #005e8a;
            }
          } 
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
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const ButtonListar = styled.a`
    background-color: #00b700;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: 8px 10px;
    border-radius: 6px;
    text-decoration: none;
    border: 1px solid transparent;
    transition: all ease .4s;
    :hover{
        background-color: transparent;
        border: 1px solid #00b700;
        color: #00b700;
    }
`;
