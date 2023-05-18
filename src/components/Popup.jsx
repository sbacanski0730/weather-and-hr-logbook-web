import React from 'react';
import PropType from 'prop-types';
import { Box } from '@mui/material';

const Popup = (props) =>
    props.trigger ? (
        <Box
            onClick={() => props.setTrigger(false)}
            sx={{
                position: 'fixed',
                background: 'rgba(0,0,0,0.5)',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {props.children}
        </Box>
    ) : null;

export default Popup;

Popup.propTypes = {
    trigger: PropType.bool,
    setTrigger: PropType.any,
    children: PropType.node,
};
