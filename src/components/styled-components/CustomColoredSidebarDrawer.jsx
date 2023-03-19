import { styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';

const CustomColoredSidebarDrawer = styled(Drawer)(({ theme }) => ({
    '&': {
        '& .MuiBackdrop-root.MuiModal-backdrop': {
            backgroundColor: theme.palette.backdropBackgroundColor,
        },
    },
}));

export default CustomColoredSidebarDrawer;
