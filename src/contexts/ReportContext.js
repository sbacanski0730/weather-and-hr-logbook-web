import { createContext, useState } from 'react';
import propTypes from 'prop-types';
import { API_ROUTES } from '../utils/constants';

export const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
    const [userReports, setUserReports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchReports = async () => {
        setIsLoading(true);
        const response = await fetch(API_ROUTES.REPORTS, {
            headers: {
                method: 'post',
                'content-type': 'application/json',
                token: localStorage.getItem('token'),
            },
        })
            .then((res) => res.json())
            .catch((e) => console.log(e));

        setUserReports(response.content);
        console.log(response.content);

        setTimeout(() => {
            setIsLoading(false);
        }, 2400);
    };

    const addReport = async (report) => {
        console.log('report UI: ', report);
        const response = await fetch('http://localhost:5014/report/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
            },
            body: JSON.stringify({
                title: report.title,
                date: `${report.date}T${report.time}`,
                skyStatus: report.sky_status,
                shipStatus: report.ship_status,
                windSpeed: report.wind_speed,
                shipLocalization: report.ship_localization,
                startHarbour: report.startHarbour,
                destinationHarbour: report.destinationHarbour,
                watchNumber: report.watchNumber,
                watchOfficer: report.watchOfficer,
                content: report.content,
            }),
        }).then((res) => res.json());
        console.log(response);
        return { status: response.status, message: response.message };
    };

    return (
        <>
            <ReportContext.Provider value={{ userReports, fetchReports, isLoading, addReport }}>
                {children}
            </ReportContext.Provider>
        </>
    );
};

ReportContextProvider.propTypes = {
    children: propTypes.node,
};
