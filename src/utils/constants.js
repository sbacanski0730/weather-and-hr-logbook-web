const API_URL = 'http://localhost:5014';
// const API_URL = 'https://weather-and-hr-logbook-api-production.up.railway.app';

export const API_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    PASSWORD_RESET: `${API_URL}/auth/send-email-to-password-reset`,
    NEW_PASSWORD: `${API_URL}/auth/set-new-password`,
    GET_USER: `${API_URL}/user/get-user`,
    EMAIL_VERIFICATION: `${API_URL}/user/verify/:id/:token`,
    SEND_EMAIL_AGAIN: `${API_URL}/user/send-email-again/:id/:token`,
    REPORTS: `${API_URL}/user/get-all-reports`,
    ADD_REPORT: `${API_URL}/report/add`,
    GET_REPORT: `${API_URL}/report/:id`,
    DELETE_REPORT: `${API_URL}/report/delete/:id`,
    UPDATE_REPORT: `${API_URL}/report/update`,
    ADD_EMPLOYEE: `${API_URL}/user/add-employee`,
    EMPLOYEES: `${API_URL}/user/employees`,
    DELETE_EMPLOYEE: `${API_URL}/user/delete-employee/:id`,
};

export const APP_ROUTES = {
    ERROR: '*',
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    INFO: '/info',
    PROJECT_INFO: '/project-info',
    REPORT: '/report/:reportId',
    REPORTS: '/reports',
    ADD_REPORT: '/add-report',
    EMPLOYEES: '/employees',
    ADD_EMPLOYEE: '/add-employee',
    VERIFICATION: '/verification/:id/:token',
    EDIT: '/edit/:id',
    RESET_PASSWORD: '/reset-password',
    SET_NEW_PASSWORD: '/set-new-password/:id/:token',
};
