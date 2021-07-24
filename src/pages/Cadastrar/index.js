import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ContainerTitle,
  Title,
  Form,
  InputForm, 
  ButtonForm,
  ButtonCad,
  AlertSuccess,
  AlertDanger
} from './style';

export const Cadastrar = () => {

  const [video, setVideo] = useState({
    titulo: '',
    canal: '',   
    embed: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const valorInput = e => setVideo({ ...video, [e.target.name]: e.target.value });

  const cadVideo = async e => {
    e.preventDefault();
    await fetch("http://localhost/api_galeria/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ video })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.mensagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Vídeo não foi cadastrado com sucesso, tente mais tarde!'
        });
      });     
  }

  return (
    <Container>
      <ContainerTitle>
        <Title>Cadastrar Vídeos</Title>
        <Link to="/">
        <ButtonCad>Listar</ButtonCad>
        </Link>  
        
      </ContainerTitle>
      {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
      {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
      <Form onSubmit={cadVideo}>
        <InputForm type="text" name="titulo" placeholder="Digite o titulo do vídeo" onChange={valorInput} />

        <InputForm type="text" name="canal" placeholder="Digite o canal do vídeo" onChange={valorInput} />        

        <InputForm type="text" name="embed" placeholder="Digite url do vídeo" onChange={valorInput} />

        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </Form>
      <small>2021 &copy;VídeoTeca - Todos os direitos reservados</small>
    </Container>
  );
}