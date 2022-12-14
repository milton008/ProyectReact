import styled from 'styled-components';

export const Title = styled.p`
    color: ${(props) => props.color || 'Red'};
    font-size: ${(props) => props.fontSize || '35px'};
    font-weight: ${(props) => props.fontWeight || 'Bold'};
    letter-spacing: -0.1px;
    font-family: sans-serif;
`;