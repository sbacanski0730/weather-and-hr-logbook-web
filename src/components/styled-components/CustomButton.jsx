import { styled } from '@mui/material';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(() => ({
    '&': {
        backgroundColor: 'secondary.dark',
        color: 'customButtonAuthTextColors.primary',
    },
    '&.MuiButton-root:hover': {
        backgroundColor: 'secondary.light',
    },
}));

export default CustomButton;
