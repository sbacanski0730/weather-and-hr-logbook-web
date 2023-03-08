import { styled } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';

const CustomTimePicker = styled(TimePicker)(({ theme }) => ({
	'&': {},
	'& label': {
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

export default CustomTimePicker;
