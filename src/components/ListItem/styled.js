import styled from 'styled-components';

export const ListItem = styled.li`
    letter-spacing: ${(props) => props.letterSpacing || '-0.2px'};
    font-size: ${(props) => props.fontSize || '20px'};
    margin: ${(props) => props.margin || '8px 0'};
    list-style-type: ${(props) => props.listStyleType || 'square'};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
    float: ${(props) => props.float};
    margin-left: ${(props) => props.marginLeft};
`;
