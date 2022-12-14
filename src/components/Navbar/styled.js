import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: DarkCyan;
    padding: 8px 0;
    margin: 0;
`;

export const NavbarItem = styled(NavLink)`
    color: MintCream;
    text-decoration: none;
    margin-right: 8px;
    padding: 8px;
    border-radius: 10px;

    &.active {
        color: white;
        background-color: MediumAquamarine;
        font-weight: bold;
    }

    &:hover {
        color: white;
        background-color: MediumAquamarine;
    }
`;