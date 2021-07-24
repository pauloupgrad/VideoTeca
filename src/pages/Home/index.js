import React, { useState, useEffect } from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  Table,
  ButtonListar,
  BtnVis,
  BtnEdit,
  BtnDel,
  AlertSuccess,
  AlertDanger
} from './style';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [data, setData] = useState([]);

  const getVideos = async () => {
    fetch("http://localhost/api_galeria/index.php")
      .then((resp) => resp.json())
      .then(({ records }) => (
        setData(records)
      ));
  }
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const deletarVideo = async idVideo => {
    await fetch("http://localhost/api_galeria/deletar.php?id=" + idVideo)
      .then((resp) => resp.json())
      .then((respJson) => {
        if (respJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: respJson.mensagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: respJson.mensagem
          });
          getVideos();
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'ERRO: Vídeo não deletado com sucesso, tente mais tarde!!'
        });
      });
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Container>
      <ContainerTitle>
        <Title>Listar Vídeos</Title>
        <Link to="/cadastrar">
          <ButtonListar>Cadastrar vídeo</ButtonListar>
        </Link>
      </ContainerTitle>
      {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
      {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>CANAL</th>
            <th>EMBED</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(video => (
            <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.titulo}</td>
              <td>{video.canal}</td>
              <td>{video.embed}</td>
              <td>
                <Link to={`/visualizar/${video.id}`}>
                  <BtnVis><i class="fas fa-eye"></i></BtnVis>
                </Link>
                <Link to={`/editar/${video.id}`}>
                  <BtnEdit><i class="fas fa-edit"></i></BtnEdit>
                </Link>
                <BtnDel onClick={() => deletarVideo(video.id)}><i class="fas fa-trash-alt"></i></BtnDel>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <small>2021 &copy;VídeoTeca - Todos os direitos reservados</small>
    </Container>
  );
}