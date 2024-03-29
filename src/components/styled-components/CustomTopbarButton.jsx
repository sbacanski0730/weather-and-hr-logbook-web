import { styled } from '@mui/material';
import Button from '@mui/material/Button';

const CustomTopbarButton = styled(Button)(({ theme }) => ({
    '&': {
        '& a': {
            color: theme.palette.text.primary,
        },
        '& p.MuiTypography-root ': {
            fontSize: '1.2rem',
        },
        '&.MuiButtonBase-root.MuiButton-root': {
            color: theme.palette.text.primary,
            border: 'none',
        },
        '&:hover.MuiButtonBase-root.MuiButton-root ': {
            // backgroundColor: `${theme.palette.topbarHoverColor.main}`,
            backgroundColor: theme.palette.topbarHoverColor,
        },
    },
}));

export default CustomTopbarButton;
