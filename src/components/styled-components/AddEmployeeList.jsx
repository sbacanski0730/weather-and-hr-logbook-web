import { CircularProgress, Container, Grow } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import PropType from 'prop-types';
import { ReportContext } from '../../contexts/ReportContext';
import AddEmployeeListElement from './AddEmployeeListElement.jsx';

const AddEmployeeList = ({ report, setReport }) => {
    const { fetchEmployees, userEmployees } = useContext(ReportContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getEmployees = async () => {
            setIsLoading(true);
            await fetchEmployees();
            setIsLoading(false);

            console.log('userEmployees: ', userEmployees);
        };
        getEmployees();
    }, []);

    if (isLoading) {
        return (
            <Container sx={{ border: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Grow in={isLoading} easing="ease-out" timeout={2000} appear={true}>
                    <CircularProgress sx={{ alignSelf: 'center', color: 'secondary.dark' }} size="22px" />
                </Grow>
            </Container>
        );
    }

    return (
        <>
            <Container
                sx={{
                    maxHeight: '200px',
                    overflow: 'auto',
                    p: '1px',
                    '@media (min-width:600px)': { p: 0 },
                }}
            >
                {userEmployees.map((e, index) => (
                    <AddEmployeeListElement
                        key={index}
                        report={report}
                        setReport={setReport}
                        userId={e._id}
                        name={e.name}
                        surname={e.surname}
                        position={e.position}
                    />
                ))}
            </Container>
        </>
    );
};

export default AddEmployeeList;

AddEmployeeList.propTypes = {
    report: PropType.object,
    setReport: PropType.func,
};
