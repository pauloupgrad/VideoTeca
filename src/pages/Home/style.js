import styled from 'styled-components';

export const Table = styled.table`
     width: 100%;
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
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #069;
`;
