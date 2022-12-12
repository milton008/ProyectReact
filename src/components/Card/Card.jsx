import Box from '../Box/Box';

function Card(props) {
    return (
        <Box backgroundColor="LightBlue" borderRadius="10px" padding="16px" marginTop="8px" {...props}>
            {props.children}
        </Box>
    );
}

export default Card;
