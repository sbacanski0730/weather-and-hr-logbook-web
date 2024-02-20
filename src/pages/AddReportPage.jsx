import React, { useState, useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

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

import { Typography } from '@mui/material';
import { ReportContext } from '../contexts/ReportContext.jsx';
import CustomTimePicker from '../components/styled-components/CustomTimePicker.jsx';
import CustomDatePicker from '../components/styled-components/CustomDatePicker.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import CustomTitleTextField from '../components/styled-components/CustomTitleTextField.jsx';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';
import reportValidation from '../utils/reportValidation';
import { APP_ROUTES } from '../utils/constants';

const AddReport = () => {
    const { addReport } = useContext(ReportContext);
    const [info, setInfo] = useState('');
    const [infoColor, setInfoColor] = useState('green');

    const [report, setReport] = useState({
        title: '',
        date: new Date().toJSON().slice(0, 10),
        time: new Date().toTimeString().slice(0, 8),
        sky_status: '',
        ship_status: '',
        wind_speed: '',
        ship_localization: '',
        startHarbour: '',
        destinationHarbour: '',
        watchNumber: '1',
        watchOfficer: '-',
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

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate(APP_ROUTES.LOGIN);
        }
    });

    const handleAddReport = async () => {
        try {
            reportValidation(report);
            const response = await addReport(report);
            if (response.status === false) {
                setInfo(response.message);
                setInfoColor('red');
                setTimeout(() => setInfo(''), 5000);
            }
            if (response.status === true) {
                setInfo('Report added');
                setInfoColor('green');
                setTimeout(() => setInfo(''), 5000);
            }
        } catch (err) {
            setInfo(err.message);
            setInfoColor('red');
            setTimeout(() => setInfo(''), 10000);
        }
    };

    return (
        <>
            <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        flex: 'display',
                        flexDirection: 'column',
                        p: 2,
                        height: '70vh',
                    }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
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
                                    p: 2,
                                }}
                            >
                                <Stack
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={1}
                                >
                                    <Box
                                        sx={{
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
                                                onChange={(e) => {
                                                    setReport({
                                                        ...report,
                                                        date: `${e.$d.toLocaleDateString().slice(6, 10)}-${e.$d
                                                            .toLocaleDateString()
                                                            .slice(3, 5)}-${e.$d.toLocaleDateString().slice(0, 2)}`,
                                                    });
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <CustomTimePicker
                                                fullWidth
                                                ampm={false}
                                                label="Time"
                                                value={dayjs(report.time, 'HH:mm')}
                                                slotProps={{
                                                    textField: {
                                                        variant: 'outlined',
                                                        fullWidth: true,
                                                        size: 'small',
                                                    },
                                                }}
                                                onChange={(e) => {
                                                    setReport({
                                                        ...report,
                                                        time: e.$d.toLocaleTimeString(),
                                                    });
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                    <Box
                                        sx={{
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
                                            ].map((option, index) => (
                                                <MenuItem key={index} value={option.value}>
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
                                                endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
                                            }}
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    wind_speed: e.target.value,
                                                })
                                            }
                                        />

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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            label="Start Harbour"
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    startHarbour: e.target.value,
                                                })
                                            }
                                        />

                                        <CustomTextField
                                            fullWidth
                                            label="Destination Harbour"
                                            error={!!error.ship_localization_error}
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    destinationHarbour: e.target.value,
                                                })
                                            }
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            label="Watch Officer"
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    watchOfficer: e.target.value,
                                                })
                                            }
                                        />

                                        <CustomTextField
                                            fullWidth
                                            label="Watch Number"
                                            error={!!error.ship_localization_error}
                                            onChange={(e) =>
                                                setReport({
                                                    ...report,
                                                    watchNumber: e.target.value,
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
                                    p: 2,
                                }}
                            >
                                <CustomTextField
                                    fullWidth
                                    label="Content"
                                    multiline
                                    onChange={(e) =>
                                        setReport({
                                            ...report,
                                            content: e.target.value,
                                        })
                                    }
                                    sx={{
                                        height: '100%',
                                        '& fieldset': {
                                            display: 'none',
                                        },
                                    }}
                                    InputProps={{
                                        sx: {
                                            height: '100%',
                                            alignItems: 'flex-start',
                                            overflowY: 'scroll',
                                            maxHeight: '580px',
                                            '@media screen and (max-width: 1200px)': {
                                                maxHeight: '200px',
                                            },
                                        },
                                    }}
                                    inputProps={{
                                        sx: {
                                            height: '100%',
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
                                alignItems: 'center',
                                px: 2,
                                gap: '10px',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 600, color: `${infoColor}` }}>
                                {info}
                            </Typography>
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
