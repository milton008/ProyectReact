import * as S from './styled.js';

function Box(props) {
    return (
        <S.Box
            height={props.height}
            width={props.width}
            backgroundColor={props.backgroundColor}
            border={props.border}
            borderRadius={props.borderRadius}
            paddingTop={props.paddingTop}
            paddingRight={props.paddingRight}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            padding={props.padding}
            margin={props.margin}
            marginTop={props.marginTop}
            marginRight={props.marginRight}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
        >
            {props.children}
        </S.Box>
    );
}

export default Box;