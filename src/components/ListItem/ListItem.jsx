import * as S from './styled.js';

function ListItem(props) {
    const children = props.children;

    if (props.isImportant === true) {
        return (
            <S.ListItem fontWeight="bold" color="green">
                {children}
            </S.ListItem>
        );
    }

    if (props.isOptional === true) {
        return (
            <S.ListItem fontWeight="bold" color="gray">
                {children}
            </S.ListItem>
        );
    }

    return <S.ListItem {...props}>{children}</S.ListItem>;
}

export default ListItem;
