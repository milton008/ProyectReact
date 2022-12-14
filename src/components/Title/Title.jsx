import * as S from './styled.js';

function Title(props) {
    if (props.isSmall === true) {
        return (
            <S.Title fontSize="25px" color={props.color || 'DodgerBlue'}>
                {props.children}
            </S.Title>
        );
    }

    return <S.Title color={props.color}>{props.children}</S.Title>;
}

export default Title;
