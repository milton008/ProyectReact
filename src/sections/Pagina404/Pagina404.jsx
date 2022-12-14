import { useNavigate } from 'react-router-dom';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

function Pagina404() {
    const navigate = useNavigate();

    function handleClickIrInicio() {
        navigate('/');
    }

    return (
        <Box padding="16px">
            <Title>Pagina no encontrada :(</Title>

            <Button onClick={handleClickIrInicio}>Ir al inicio</Button>
        </Box>
    );
}

export default Pagina404;