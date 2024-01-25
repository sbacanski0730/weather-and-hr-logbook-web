import React from 'react';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import { Link as ReactLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import propTypes from 'prop-types';
import { APP_ROUTES } from '../../utils/constants';

const ShowReportButton = ({ reportId }) => (
    <>
        <Link
            to={APP_ROUTES.REPORT.replace(':reportId', reportId)}
            component={ReactLink}
            sx={{
                // border: '1px dotted yellow',
                width: '100%',
                height: '100%',
            }}
        >
            <Icon
                sx={{
                    // border: '1px solid white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                }}
            >
                <VisibilityIcon sx={{ color: 'text.primary' }} />
            </Icon>
        </Link>
    </>
);
export default ShowReportButton;

ShowReportButton.propTypes = {
    reportId: propTypes.string,
};
