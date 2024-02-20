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
        setIsLoading(false);
    };

    const addReport = async (report) => {
        const response = await fetch(API_ROUTES.ADD_REPORT, {
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

        return { status: response.status, message: response.message };
    };

    const getReportById = async (reportId) => {
        const response = await fetch(API_ROUTES.GET_REPORT.replace(':id', reportId), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
            },
        }).then((res) => res.json());
        return response;
    };

    const deleteReport = async (reportId) => {
        const response = await fetch(API_ROUTES.DELETE_REPORT.replace(':id', reportId), {
            method: 'delete',
            headers: { token: localStorage.getItem('token') },
        }).then((res) => res.json());
        return response;
    };

    const updateReport = async (body) => {
        const response = await fetch(API_ROUTES.UPDATE_REPORT, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
            },
            body: JSON.stringify(body),
        }).then((res) => res.json());
        return response;
    };

    return (
        <>
            <ReportContext.Provider
                value={{
                    userReports,
                    fetchReports,
                    isLoading,
                    addReport,
                    getReportById,
                    deleteReport,
                    updateReport,
                }}
            >
                {children}
            </ReportContext.Provider>
        </>
    );
};

ReportContextProvider.propTypes = {
    children: propTypes.node,
};
