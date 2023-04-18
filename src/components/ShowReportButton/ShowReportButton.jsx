import React from 'react';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import { Link as ReactLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { APP_ROUTES } from '../../utils/constants';

const ShowReportButton = () => (
    <>
        <Icon
            sx={{
                // border: '1px solid white',
                width: '100%',
                height: '100%',
                display: 'flex',
            }}
        >
            <Link
                to={APP_ROUTES.REPORT.replace(':reportId', '1231543')}
                component={ReactLink}
                sx={{
                    // border: '1px dotted yellow',
                    width: '100%',
                    height: '100%',
                }}
            >
                <VisibilityIcon sx={{ color: 'text.primary' }} />
            </Link>
        </Icon>
    </>
);
export default ShowReportButton;
