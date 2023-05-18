import React from 'react';
import PropType from 'prop-types';
import { Box, Container, Fade, Paper, Typography } from '@mui/material';
import Popup from './Popup.jsx';
import CustomButton from './styled-components/CustomButton.jsx';

const DeleteReportPopup = ({ trigger, setTrigger, handleDelete }) => (
    <>
        <Popup trigger={trigger} setTrigger={setTrigger}>
            <Fade in={true} timeout={1000}>
                <Paper elevation={11} sx={{ borderRadius: '10px' }}>
                    <Container maxWidth="sm" sx={{ justifyContent: 'center', alignItems: 'center', p: 3 }}>
                        <Typography variant="h3" sx={{ pb: 3 }}>
                            Do you want to delete this report?
                        </Typography>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 4 }}>
                            <CustomButton variant="contained" onClick={() => handleDelete()}>
                                Yes
                            </CustomButton>
                            <CustomButton variant="contained" onClick={() => setTrigger(false)}>
                                No
                            </CustomButton>
                        </Box>
                    </Container>
                </Paper>
            </Fade>
        </Popup>
    </>
);

export default DeleteReportPopup;

DeleteReportPopup.propTypes = {
    trigger: PropType.bool,
    children: PropType.node,
    setTrigger: PropType.any,
    handleDelete: PropType.any,
};
