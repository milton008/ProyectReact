import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import * as S from './styled.js';

function RickAndMorty() {
    const [characters, setCharacters] = useState([]);
    

    const [responseRickAndMortyApi, fetchRickAndMortyApi] = useFetch(
        'https://rickandmortyapi.com/api/character'
    );

    useEffect(() => {
        fetchRickAndMortyApi();
    }, []);

    useEffect(() => {
        if (responseRickAndMortyApi !== null){
          setCharacters(responseRickAndMortyApi.results)  
        }
   }, [responseRickAndMortyApi]);

     return (

        <Box>
            <Title>Personajes</Title>
            <S.ContainerCards>
                {
                    characters.length > 0 &&
                    characters.map((item) => (
                        <S.ItemCard>
                        <Card marginBottom="16px">
                            <Title isSmall>{item.name}</Title>
                            <Image width="200px" isBordered url={item.image} />
                            <p>Estado: {item.status}</p>
                            <p>Especie: {item.species}</p>
                        </Card>
                        </S.ItemCard>        
                    ))
                }
            </S.ContainerCards>
        </Box>

        
    );
}

export default RickAndMorty;