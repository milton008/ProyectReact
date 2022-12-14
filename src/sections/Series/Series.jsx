import { useEffect, useState } from 'react';
import useScore from '../../hooks/useScore';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import Title from '../../components/Title/Title';
import imagenseries from '../../img/Series.png';
import Rating from '@mui/material/Rating';
import Card from '../../components/Card/Card';

const listaSeries = [
    { name: 'The Terminal List', isImportant: true, isOptional: false },
    { name: 'Barry', isImportant: false, isOptional: false },
    { name: 'Reacher', isImportant: false, isOptional: false },
    { name: 'Better Call Saul', isImportant: false, isOptional: false },
    { name: 'Ted Lasso', isImportant: false, isOptional: true },
    { name: 'The Boys', isImportant: false, isOptional: false },
    { name: 'Peacemaker', isImportant: false, isOptional: false }
];

function Series() {
    const [showList, setShowList] = useState(false);
    const { score, setScore, decrementScore, incrementScore, resetScore } = useScore();
    const [like, setLike] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, 'Componente Montado']);

        return function () {
            setHistory((prevHistory) => [...prevHistory, 'Componente Desmontado']);
        };
    }, []);

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, 'Cambio el valor de like']);
    }, [like]);

    function handleClickShowList() {
        setShowList(!showList);
    }

    function handleClickLike() {
        setLike(!like);
    }

    function handleClickSave() {
        setIsSaved(!isSaved);
        setHistory((prevHistory) => [...prevHistory, 'Cambió el valor del save']);
    }

    function handleClickShowHistory() {
        setShowHistory(!showHistory);
    }

    function handleClickResetHistory() {
        setHistory([]);
    }

    return (
        <Box padding="16px">
            <Title color="green">SERIES PARA MARATONEAR DE 2022</Title>

            <Image url={imagenseries} alt="series-imagen" width="500px" />

            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Box>
                    <Title isSmall color="red">
                        Listado
                    </Title>

                    <Button onClick={handleClickShowList}>{showList ? 'Ocultar Listado' : 'Ver Listado'}</Button>

                    {showList && (
                        <List>
                            {listaSeries.map((listado) => (
                                <ListItem isImportant={listado.isImportant} isOptional={listado.isOptional}>
                                    {listado.name}
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>

                <Image
                    url="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-pochoclos.png"
                    alt="pochoclo"
                    width="200px"
                    isBordered
                />
            </Box>
            <Card backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Puntuacion: {score}</Title>
                <Rating value={score} max={5} onChange={(event, newScore) => setScore(newScore)} />
                <Box>
                    <Button onClick={incrementScore}>Subir Puntuacion</Button>
                    <Button onClick={decrementScore}>Bajar Puntuacion</Button>
                    <Button onClick={resetScore}>Reiniciar Puntuacion</Button>
                </Box>
                {score === 5 && <p>No te olvides de comprar pochoclos!!!</p>}
            </Card>

            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Interacciones</Title>
                <Button onClick={handleClickLike}>{like ? '❤️ Me Gusta' : '💔 Ya No Me Gusta'}</Button>
                <Button onClick={handleClickSave}>{isSaved ? '⭐ Guardar Listado' : '🌟 Listado guardado!'}️</Button>
            </Box>
            <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px">
                <Title isSmall>Historial</Title>

                {showHistory && history.map((message, i) => <p key={'message-' + i}>{message}</p>)}

                {
                    <Button onClick={handleClickShowHistory}>
                        {showHistory ? 'Ocultar historial' : 'Mostrar historial'}
                    </Button>
                }

                {history?.length > 0 && <Button onClick={handleClickResetHistory}>Re️iniciar historial</Button>}
            </Box>
        </Box>
    );
}

export default Series;