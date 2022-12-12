import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-color: DodgerBlue;
    box-shadow: 0px 2px 4px SkyBlue;
    padding: 8px;
    margin-top: 4px;
    margin-right: 8px;

    &:hover {
        background-color: DeepSkyBlue;
    }
`;