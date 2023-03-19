import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '&': {
        // border: '1px solid white',
    },
    '& input': {
        fontSize: '28px',
        marginLeft: '5px',
    },
    '& label': {
        fontSize: '24px',
        marginLeft: '5px',
        '&.Mui-focused': {
            color: theme.palette.text.secondary,
        },
    },
    // kolor border static
    '& fieldset': {
        borderRadius: 0,
        borderColor: theme.palette.secondary.main,
    },
    // kolor border do :hover
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.dark,
    },
    // do bordera na focus
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderColor: theme.palette.secondary.dark,
    },
}));

export default CustomTextField;
