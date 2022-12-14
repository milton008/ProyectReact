import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import Link from '../../components/Link/Link';
import UsuarioContext from '../../contexts/UsuarioContext';
import { useContext } from 'react';

function CardCoctel(props) {
    const cocktailName = props.cocktailName;
    const cocktailImage = props.cocktailImage;
    const cocktailCategory = props.cocktailCategory;
    const cocktailInstructions = props.cocktailInstructions;

    const { userName, isUserLoggedIn, userLogIn } = useContext(UsuarioContext);

    return (
        <Card marginBottom="16px">
            <Title isSmall>{cocktailName}</Title>
            <p>Categoría: {cocktailCategory}</p>
            <Image width="200px" isBordered url={cocktailImage} size="sm" />

            {isUserLoggedIn === true ? (
                <p>Instrucciones: {cocktailInstructions}</p>
            ) : (
                <Box>
                    <span>No podés ver las instrucciones.</span>
                    <Link onClick={userLogIn}>Acceder como {userName}</Link>
                </Box>
            )}
        </Card>
    );
}

export default CardCoctel;