import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { BoxGeral, BoxVideoInfo, BoxSidebar } from './style';
import { BoxVideo } from '../../components/BoxVideo';

export const Visualizar = (props) => {
    
    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getVideo = async () => {
            await fetch("http://localhost/api_galeria/visualizar.php?id=" + id)
            .then((resp) => resp.json())
            .then(({ video }) => {
                setData(video);
            })
        }

        getVideo();
    }, [id]);

    return (
        <>
            <Header />
            <main>
                <BoxGeral>
                    <BoxVideoInfo>
                        <BoxVideo data = {data} />
                    </BoxVideoInfo>
                    <BoxSidebar>
                        SIDEBAR
                    </BoxSidebar>
                </BoxGeral>
            </main>
        </>
        


    )
}