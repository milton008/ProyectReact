import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import imagenmati from '../../img/Mati.png';
import CardCoctel from './CardCoctel';
import useFetch from '../../hooks/useFetch';

function Cocteles() {
    const [cocktails, setCocktails] = useState([]);
    const [showAllCocktails, setShowAllCocktails] = useState(false);

    const [responseCocktails, fetchCocktails] = useFetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka'
    );

    useEffect(() => {
        fetchCocktails();
    }, []);

    useEffect(() => {
        if (responseCocktails) {
            setCocktails(responseCocktails.drinks);
        }
    }, [responseCocktails]);

    return (
        <Box display="flex" flexDirection="column" rowGap="16px" padding="16px">
            <Box>
                <Title>Coctel favorito de Mati 👇👇👇</Title>
                <Image url={imagenmati} alt="mati-imagen" />

                {cocktails.length > 0 && (
                    <CardCoctel
                        cocktailName={cocktails[5].strDrink}
                        cocktailImage={cocktails[5].strDrinkThumb}
                        cocktailCategory={cocktails[5].strCategory}
                        cocktailInstructions={cocktails[5].strInstructions}
                    />
                )}
            </Box>

            <Box>
                <Title>Cocteles</Title>

                <Box>
                    {showAllCocktails ? (
                        cocktails.length > 0 &&
                        cocktails.map((item) => (
                            <Card marginBottom="16px">
                                <Title isSmall>{item.strDrink}</Title>
                                <Image width="200px" isBordered url={item.strDrinkThumb} />
                                <p>Categoría: {item.strCategory}</p>
                            </Card>
                        ))
                    ) : (
                        <Button onClick={() => setShowAllCocktails(!showAllCocktails)}>
                            Mostrar todos los cocteles
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Cocteles;
