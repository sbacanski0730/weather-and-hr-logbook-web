import { styled } from '@mui/material';
import ListItem from '@mui/material/ListItem';

const CustomSidebarListItem = styled(ListItem)(({ theme }) => ({
    '&': {
        '&.MuiListItem-root': {
            backgroundColor: `${theme.palette.primary.dark}17`,
        },
        '&:hover.MuiListItem-root': {
            backgroundColor: `${theme.palette.primary.dark}25`,
        },
        '& .MuiListItemIcon-root': {
            color: theme.palette.text.primary,
        },
        '& .MuiListItemText-root': {
            color: theme.palette.text.primary,
        },
    },
}));

export default CustomSidebarListItem;
