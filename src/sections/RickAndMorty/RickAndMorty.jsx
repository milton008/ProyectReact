import { useEffect, useState } from 'react';
import { Box, Card, Text, Stack, Badge, Skeleton } from '@enviopack/enviopack-ui';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import useFetch from '../../hooks/useFetch';

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
            {characters.length > 0 ? (
            <Box display="flex" flexDirection="row" style={{flexWrap: "wrap"}}>
                {
                    characters.map((item) => (
                        <Card marginBottom="16px" backgroundColor='blue-400' borderRadius="10px" padding="16px" margin="8px" flexGrow="1" width="300px">
                            <Title isSmall>{item.name}</Title>
                            <Image width="200px" isBordered url={item.image} />
                            <Stack>
                                <Text fontWeight="bold" color="red-600" fontSize="md">Estado: {<Badge size="md" color={item.status === 'Alive' ? 'green' : 'red'}>{item.status}</Badge>}</Text>
                                <Text fontWeight="bold" color="black-600" fontSize="md">Especie: {item.species}</Text>
                            </Stack>
                        </Card>       
                    ))
                }
            </Box>
            ) : (   
            <Stack gap="0.5rem">
               <Skeleton />
               <Skeleton height="10rem" />
            </Stack>
            )}
        </Box>
    );
}

export default RickAndMorty;