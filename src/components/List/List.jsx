import * as S from './styled.js';

function List(props) {
    if (props.isHorizontal === true) {
        return <S.ListHorizontal>{props.children}</S.ListHorizontal>;
    }

    return <S.List>{props.children}</S.List>;
}

export default List;