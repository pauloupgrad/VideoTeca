import styled from 'styled-components';

export const Container = styled.div`
    width: 55%;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.4);
    text-align: center ;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const Title = styled.h1`
    font-size: 1.6rem;   
    text-transform: uppercase;
    color: #069;    
`;

export const Form = styled.form`
    width: 100%auto;
    margin: 20px 0px;
    display: block;
    text-align: left;
`;
export const InputForm = styled.input`
     width: 100%;
     margin-bottom: 10px;
     height: 40px;
     padding: 0px 10px;
     border: 1px solid #ccc;
     border-radius: 6px;
`;
export const TextAreaForm = styled.textarea`
     width: 100%;
     margin-bottom: 10px;     
     padding:10px;
     border: 1px solid #ccc;
     border-radius: 6px;
     resize: vertical;
`;
export const ButtonForm = styled.button`
    background-color: #069;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all ease .4s;
    :hover{
        background-color: transparent;
        border: 1px solid #069;
        color: #069;
    }
`;

export const ButtonCad = styled.button`
    background-color: #069;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all ease .4s;
    :hover{
        background-color: transparent;
        border: 1px solid #069;
        color: #069;
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
