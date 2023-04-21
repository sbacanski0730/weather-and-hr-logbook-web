const API_URL = 'http://localhost:5014';

export const API_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    REPORTS: `${API_URL}/user/get-all-reports`,
    GET_USER: `${API_URL}/user/get-user`,
};

export const APP_ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    INFO: '/info',
    PROJECT_INFO: '/project-info',
    REPORT: '/report/:reportId',
    REPORTS: '/reports',
    ADD_REPORT: '/add-report',
    ERROR: '/*',
};
