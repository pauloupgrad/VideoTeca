import React, { useEffect, useState } from 'react';
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

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [titulo, setTitulo] = useState('');
    const [canal, setCanal] = useState('');
    const [embed, setEmbed] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const editVideo = async e => {
        e.preventDefault();

        await fetch("http://localhost/api_galeria/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, titulo, canal, embed })
        }).then((resp) => resp.json())
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
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Vídeo não foi editado com sucesso, tente mais tarde!'
                });
            });
    }

    useEffect(() => {
        const getVideo = async () => {
            await fetch("http://localhost/api_galeria/visualizar.php?id=" + id)
                .then((resp) => resp.json())
                .then(({ video }) => {
                    setTitulo(video.titulo);
                    setCanal(video.canal);
                    setEmbed(video.embed);
                })
        }

        getVideo();
    }, [id]);
    return (
        <Container>
            <ContainerTitle>
                <Title>Editar Vídeos</Title>
                <Link to="/">
                    <ButtonCad>Listar</ButtonCad>
                </Link>

            </ContainerTitle>
            {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
            <Form onSubmit={editVideo}>
                <InputForm type="text" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />

                <InputForm type="text" name="canal" value={canal} onChange={e => setCanal(e.target.value)} />

                <InputForm type="text" name="embed" value={embed} onChange={e => setEmbed(e.target.value)} />

                <ButtonForm type="submit">Editar</ButtonForm>
            </Form>
            <small>2021 &copy;VídeoTeca - Todos os direitos reservados</small>
        </Container>
    );
}