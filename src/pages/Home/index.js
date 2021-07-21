import React, { useState, useEffect } from 'react';
import { Container, Title, Table, BtnEdit, BtnDel } from './style';

export const Home = () => {

    const [data, setData] = useState([]);
  
    const getVideos = async () => {
      fetch("http://localhost/api_galeria/index.php")
      .then((resp) => resp.json())
      .then(({records}) => (
        setData(records)
      ));
    }
  
    useEffect(() => {
      getVideos();
    }, []);
  
    return (
      <Container>
        <Title>Listar Vídeos usando page home</Title>
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>CANAL</th>
                    <th>DESCRIÇÃO</th>
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
                        <td>{video.descricao}</td>
                        <td>{video.embed}</td>
                        <td>
                            <a className="vis" href="#"><i class="fas fa-eye"></i></a>
                            <a className="edit" href="#"><i class="fas fa-edit"></i></a>
                            <a className="del" href="#"><i class="fas fa-trash-alt"></i></a>                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    );
  }