import * as S from './styled.js';

function Link(props) {
    const onClick = props.onClick;
    const customStyle = props.customStyle;

    return (
        <S.Link onClick={onClick} style={customStyle}>
            {props.children}
        </S.Link>
    );
}

export default Link;