import styled from 'styled-components';

export const Box = styled.div`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background-color: ${(props) => props.backgroundColor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    padding-top: ${(props) => props.paddingTop};
    padding-right: ${(props) => props.paddingRight};
    padding-bottom: ${(props) => props.paddingBottom};
    padding-left: ${(props) => props.paddingLeft};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
    margin-right: ${(props) => props.marginRight};
    margin-bottom: ${(props) => props.marginBottom};
    margin-left: ${(props) => props.marginLeft};
`;
