import { useContext, useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Link from '../../components/Link/Link';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import Title from '../../components/Title/Title';
import UsuarioContext from '../../contexts/UsuarioContext';
import useFetch from '../../hooks/useFetch';
import imagenqr from '../../img/QR.png';

const listaMia = [
    { name: 'Tareas de padre 🤯', isImportant: true, isOptional: false },
    { name: 'Gimnasio', isImportant: false, isOptional: false },
    { name: 'Trabajar', isImportant: false, isOptional: false },
    { name: 'Cocinar', isImportant: false, isOptional: false },
    { name: 'Pensar que voy a hacer para romper el React', isImportant: false, isOptional: true },
    { name: 'Mirar alguna serie de la otra lista 👈', isImportant: false, isOptional: false },
    { name: 'Intentar sacarle musica a la guitarra', isImportant: false, isOptional: false }
];

const RAZA_PERRO_FAVORITA = {
    es: 'Pug',
    en: 'pug'
};

function SobreMi() {
    const [showList, setShowList] = useState(false);
    const [razaPerroFavorito, setRazaPerroFavorito] = useState([]);

    const { isUserLoggedIn, userLogIn, userName } = useContext(UsuarioContext);

    const [responseRazaPerroFavorito, fetchRazaPerroFavorito] = useFetch(
        `https://dog.ceo/api/breed/${RAZA_PERRO_FAVORITA.en}/images/random`
    );

    useEffect(() => {
        fetchRazaPerroFavorito();
    }, []);

    useEffect(() => {
        if (responseRazaPerroFavorito) {
            console.log(responseRazaPerroFavorito.message.waterdog);
            setRazaPerroFavorito(responseRazaPerroFavorito.message);
        }
    }, [responseRazaPerroFavorito]);

    function handleClickShowList() {
        setShowList(!showList);
    }

    function handleClickChangePhoto() {
        fetchRazaPerroFavorito();
    }

    return (
        <Box padding="16px">
            <Title>Que hago cuando no rompo React</Title>

            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Listado</Title>

                <Button onClick={handleClickShowList}>{showList ? 'Ocultar Listado' : 'Ver Listado'}</Button>

                {showList && (
                    <List>
                        {listaMia.map((listado) => (
                            <ListItem isImportant={listado.isImportant} isOptional={listado.isOptional}>
                                {listado.name}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>

            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>
                    Mi raza favorita de perro es {isUserLoggedIn ? RAZA_PERRO_FAVORITA.es.toUpperCase() : '...'}
                </Title>

                {isUserLoggedIn ? (
                    <>
                        {console.log(razaPerroFavorito)}
                        <Image url={razaPerroFavorito} alt="qr-imagen" isMedium isBordered />
                        <Box>
                            <Button onClick={handleClickChangePhoto} customStyle={{ width: '210px' }}>
                                Traer otra imagen
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Box>
                        <Link onClick={userLogIn}>Acceder como {userName} para ver esta sección</Link>
                    </Box>
                )}
            </Box>

            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Escaneame para saber más</Title>

                <Image url={imagenqr} alt="qr-imagen" width="200px" isBordered />
            </Box>
        </Box>
    );
}

export default SobreMi;