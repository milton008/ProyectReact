import { useContext } from 'react';
import UsuarioContext from '../../contexts/UsuarioContext';
import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import * as S from './styled.js';

function Navbar() {
    const { userName, isUserLoggedIn, userLogIn, userLogOut } = useContext(UsuarioContext);

    return (
        <S.Navbar>
            <List isHorizontal backgroundColor="DarkCyan" padding="8px 16px">
                <ListItem>
                    <S.NavbarItem to="series">Series</S.NavbarItem>
                </ListItem>

                <ListItem>
                    <S.NavbarItem to="cocteles">Cocteles</S.NavbarItem>
                </ListItem>

                <ListItem>
                    <S.NavbarItem to="sobremi">Sobre Mi</S.NavbarItem>
                </ListItem>

                <ListItem>
                    <S.NavbarItem to="rickandmorty">Rick And Morty</S.NavbarItem>
                </ListItem>

                <ListItem float="right" margin="0px 8px 0px 0px">
                    {isUserLoggedIn === true ? (
                        <Link onClick={userLogOut} customStyle={{ color: 'white' }}>
                            Salir
                        </Link>
                    ) : (
                        <Link onClick={userLogIn} customStyle={{ color: 'white' }}>
                            Acceder
                        </Link>
                    )}
                </ListItem>

                {isUserLoggedIn === true && (
                    <ListItem float="right" margin="0px 8px 0px 0px" color="white">
                        Hola {userName}!
                    </ListItem>
                )}
            </List>
        </S.Navbar>
    );
}

export default Navbar;