import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { BsCloudRainHeavyFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { BsWind } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsFillCloudsFill } from 'react-icons/bs';
import { BsFillCloudFill } from 'react-icons/bs';

import CustomTextField from '../components/styled-components/CustomTextField';

const AddReport = () => {
	const [report, setReport] = useState({
		title: '',
		date: '',
		time: '',
		sky_status: '',
		ship_status: '',
		wind_speed: '',
		ship_localization: '',
		employees: [],
	});
	return (
		<>
			<Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
				<Container
					maxWidth='xl'
					sx={{
						// border: '1px dotted pink',
						flex: 'display',
						flexDirection: 'column',
						p: 2,
						height: '70vh',
					}}
				>
					<Stack
						direction='column'
						sx={{
							// border: '1px solid white',
							height: '100%',
							display: 'flex',
							justifyContent: 'start',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '100%',
								// border: '1px solid yellow'
							}}
						>
							<TextField fullWidth label='Title' variant='standard' />
						</Box>
						<Grid
							container
							direction='row'
							column={12}
							sx={{
								// border: '1px solid yellow',
								height: '100%',
							}}
						>
							<Grid
								item
								xs={12}
								md={6}
								sx={{
									display: 'flex',
									// border: '1px dashed orange',
									p: 2,
								}}
							>
								<Stack
									sx={{
										width: '100%',
										// border: '1px solid yellow',
										// p: 2,
									}}
									spacing={1}
								>
									<Box
										sx={{
											// border: '1px dashed pink',
											display: 'flex',
											flexDirection: 'row',
											width: '100%',
											gap: '5px',
										}}
									>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker
												label='Date'
												fullWidth
												slotProps={{
													textField: {
														variant: 'outlined',
														fullWidth: true,
														size: 'small',
													},
												}}
											/>
										</LocalizationProvider>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<TimePicker
												fullWidth
												label='Time'
												slotProps={{
													textField: {
														variant: 'outlined',
														fullWidth: true,
														size: 'small',
													},
												}}
											/>
										</LocalizationProvider>
									</Box>
									<Box
										sx={{
											// border: '1px dashed pink',
											display: 'flex',
											flexDirection: 'row',
											width: '100%',
											gap: '5px',
										}}
									>
										<TextField fullWidth select label='Sky Status'>
											{[
												{
													value: 'rain',
													icon: <BsCloudRainHeavyFill />,
												},
												{ value: 'sun', icon: <BsFillSunFill /> },
												{ value: 'wind', icon: <BsWind /> },
												{
													value: 'snow',
													icon: <BsFillCloudSnowFill />,
												},
												{
													value: 'heavy-clouds',
													icon: <BsFillCloudsFill />,
												},
												{
													value: 'clouds',
													icon: <BsFillCloudFill />,
												},
											].map(option => {
												return (
													<MenuItem
														key={option.value}
														value={option.value}
													>
														{option.icon}
													</MenuItem>
												);
											})}
										</TextField>
										<TextField fullWidth select label='Ship status'>
											<MenuItem key='In harbor' value='in harbor'>
												In harbor
											</MenuItem>
											<MenuItem key='at sea' value='at sea'>
												At sea
											</MenuItem>
										</TextField>
									</Box>
									<Box
										sx={{
											// border: '1px dashed pink',
											display: 'flex',
											flexDirection: 'row',
											width: '100%',
											gap: '5px',
										}}
									>
										<TextField
											fullWidth
											label='Wind speed'
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														km/h
													</InputAdornment>
												),
											}}
										/>
										<TextField fullWidth label='Localization' />
									</Box>
								</Stack>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}
								sx={{
									// display: 'flex',
									// border: '1px dashed orange',
									p: 2,
								}}
							>
								<TextField
									fullWidth
									label='Content'
									multiline
									sx={{
										height: '100%',
										// border: '1px solid pink',
										// overflow: 'hidden',
									}}
									inputProps={{
										sx: {
											height: '100%',
											// overflow: 'scroll',
										},
									}}
									InputProps={{
										sx: {
											height: '100%',
											alignItems: 'flex-start',
											// overflow: 'scroll',
										},
									}}
								/>
							</Grid>
						</Grid>
						<Box
							sx={{
								// border: '1px solid white',
								width: '100%',
								display: 'flex',
								justifyContent: 'end',
								px: 2,
							}}
						>
							{/* TODO: Style this button */}
							<Button sx={{ border: '1px solid white' }}>Add Report</Button>
						</Box>
					</Stack>
				</Container>
			</Paper>
		</>
	);
};

export default AddReport;
