import React from 'react';
import { Box_Video, Box_Info, Box_Info_canal, Box_Info_title} from './style';


export const BoxVideo = ({ data }) => {
    return (
      
        <Box_Video>
            <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${data.embed}`} title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <Box_Info>
                <Box_Info_canal>
                    CANAL<br />
                    {data.canal}
                </Box_Info_canal>
                <Box_Info_title>
                    {data.titulo}
                </Box_Info_title>
            </Box_Info>
        </Box_Video>
       
    );
}