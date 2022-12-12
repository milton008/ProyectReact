import * as S from './styled.js';

function Button(props) {
    const customStyle = props.customStyle;

    return (
        <S.Button onClick={props.onClick} style={customStyle}>
            {props.children}
        </S.Button>
    );
}

export default Button;
