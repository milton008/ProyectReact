import * as S from './styled.js';

function Image(props) {
    return <S.Image src={props.url} alt={props.alt} width={props.width} isBordered={props.isBordered} />;
}

export default Image;