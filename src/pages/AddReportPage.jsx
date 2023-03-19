import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import InputAdornment from '@mui/material/InputAdornment';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import {
    BsCloudRainHeavyFill,
    BsFillSunFill,
    BsWind,
    BsFillCloudSnowFill,
    BsFillCloudsFill,
    BsFillCloudFill,
} from 'react-icons/bs';

import CustomTimePicker from '../components/styled-components/CustomTimePicker.jsx';
import CustomDatePicker from '../components/styled-components/CustomDatePicker.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import CustomTitleTextField from '../components/styled-components/CustomTitleTextField.jsx';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';

const AddReport = () => {
    const [report, setReport] = useState({
        title: '',
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toTimeString().slice(0, 8),
        sky_status: '',
        ship_status: '',
        wind_speed: '',
        ship_localization: '',
        employees: [],
        content: '',
    });
    const [error] = useState({
        title_error: false,
        date_error: false,
        time_error: false,
        sky_status_error: false,
        ship_status_error: false,
        wind_speed_error: false,
        ship_localization_error: false,
        content_error: false,
    });

    const handleAddReport = () => {};

    return (
        <>
            <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        // border: '1px dotted pink',
                        flex: 'display',
                        flexDirection: 'column',
                        p: 2,
                        height: '70vh',
                    }}
                >
                    <Stack
                        direction="column"
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
                            <CustomTitleTextField
                                fullWidth
                                error={!!error.title_error}
                                label="Title"
                                variant="standard"
                                type="text"
                                sx={{ fontSize: '36px' }}
                                onChange={(e) => setReport({ ...report, title: e.target.value })}
                            />
                        </Box>
                        <Grid
                            container
                            direction="row"
                            column={12}
                            sx={{
                                // border: '1px solid yellow',
                                height: '100%',
                            }}
                        >
                            <Grid
                                item
                                sm={12}
                                md={12}
                                lg={6}
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
                                            <CustomDatePicker
                                                label="Date"
                                                fullWidth
                                                // error={error.date_error ? true : false}
                                                error={true}
                                                format="YYYY-MM-DD"
                                                value={dayjs(report.date)}
                                                slotProps={{
                                                    textField: {
                                                        variant: 'outlined',
                                                        fullWidth: true,
                                                        size: 'small',
                                                    },
                                                }}
                                                inputFormat="dd-MM-yyyy"
                                                onChange={(newValue) => {
                                                    setReport({
                                                        ...report,
                                                        date: newValue.$d.toISOString(),
                                                    });
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <CustomTimePicker
                                                fullWidth
                                                ampm={false}
                                                label="Time"
                                                // value={dayjs(report.time)}
                                                value={dayjs(report.time, 'HH:mm')}
                                                slotProps={{
                                                    textField: {
                                                        variant: 'outlined',
                                                        fullWidth: true,
                                                        size: 'small',
                                                    },
                                                }}
                                                onChange={(newValue) => {
                                                    setReport({
                                                        ...report,
                                                        time: newValue.$d
                                                            .toTimeString()
                                                            .slice(0, 8),
                                                    });
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
                                        <CustomTextField
                                            fullWidth
                                            select
                                            error={!!error.sky_status_error}
                                            defaultValue=""
                                            label="Sky Status"
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    sky_status: e.target.value,
                                                })
                                            }
                                        >
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
                                            ].map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.icon}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>
                                        <CustomTextField
                                            fullWidth
                                            select
                                            error={!!error.ship_status_error}
                                            defaultValue=""
                                            label="Ship status"
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    ship_status: e.target.value,
                                                })
                                            }
                                        >
                                            <MenuItem key="In harbor" value="in harbor">
                                                In harbor
                                            </MenuItem>
                                            <MenuItem key="at sea" value="at sea">
                                                At sea
                                            </MenuItem>
                                        </CustomTextField>
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
                                        <CustomTextField
                                            fullWidth
                                            label="Wind speed"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        km/h
                                                    </InputAdornment>
                                                ),
                                            }}
                                            // TODO: validate "wind_speed" - just numbers, no letters
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    wind_speed: e.target.value,
                                                })
                                            }
                                        />
                                        {/* TODO: validate "localization" - just proper localization format */}
                                        <CustomTextField
                                            fullWidth
                                            label="Localization"
                                            error={!!error.ship_localization_error}
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    ship_localization: e.target.value,
                                                })
                                            }
                                        />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={6}
                                sx={{
                                    // display: 'flex',
                                    // border: '1px dashed orange',
                                    p: 2,
                                }}
                            >
                                <CustomTextField
                                    fullWidth
                                    label="Content"
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
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                px: 2,
                            }}
                        >
                            <CustomButton variant="contained" onClick={handleAddReport}>
                                Add Report
                            </CustomButton>
                        </Box>
                    </Stack>
                </Container>
            </Paper>
        </>
    );
};

export default AddReport;
