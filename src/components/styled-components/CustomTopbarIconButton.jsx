import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const CustomTopbarIconButton = styled(IconButton)(({ theme }) => ({
    '&': {
        color: theme.palette.text.primary,
    },
    '&:hover': {
        // backgroundColor: `${theme.palette.topbarHoverColor.main}`,
        backgroundColor: theme.palette.topbarHoverColor,
    },
}));

export default CustomTopbarIconButton;
