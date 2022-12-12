import styled from 'styled-components';

export const Image = styled.img`
    width: ${(props) => props.width};
    border-radius: ${(props) => props.isBordered && '10%'};
    border-width: ${(props) => props.isBordered && '5px'};
    border-style: ${(props) => props.isBordered && 'solid'};
    margin-top: ${(props) => props.isBordered && '24px'};
    border-color: ${(props) => props.isBordered && 'CadetBlue'};
`;