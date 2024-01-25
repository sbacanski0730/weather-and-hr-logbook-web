import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/ThemeContext.jsx';
import RegisterPage from '../../pages/RegisterPage.jsx';

const renderRegisterPage = () => {
    render(
        <ThemeProvider>
            <MemoryRouter initialEntries={['/']}>
                <RegisterPage />
            </MemoryRouter>
        </ThemeProvider>
    );
};

describe('Register Page', () => {
    it('Checks proper render of the page', () => {
        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={['/']}>
                    <RegisterPage />
                </MemoryRouter>
            </ThemeProvider>
        );
    });

    it('Checks proper Email Address typing', () => {
        renderRegisterPage();

        const emailInput = screen.getByLabelText(/email address/i);
        fireEvent.change(emailInput, { target: { value: 'example@email.com' } });
        expect(emailInput).toHaveValue('example@email.com');
    });

    it('Checks invalid Email typing', async () => {
        renderRegisterPage();

        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByTestId('password-input');
        const repeatPasswordInput = screen.getByTestId('repeat-password-input');

        fireEvent.change(emailInput, { target: { value: 'example.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.change(repeatPasswordInput, { target: { value: '123456' } });

        const button = screen.getByText('Register');
        fireEvent.click(button);

        await screen.findByText('Valid email required');
    });

    it('Checks proper Password typing', () => {
        renderRegisterPage();

        const passwordInput = screen.getByTestId('password-input');
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        expect(passwordInput).toHaveValue('123456');
    });

    it('Checks invalid password typing', async () => {
        renderRegisterPage();

        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByTestId('password-input');
        const repeatPasswordInput = screen.getByTestId('repeat-password-input');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123' } });
        fireEvent.change(repeatPasswordInput, { target: { value: '1' } });

        const button = screen.getByText('Register');
        fireEvent.click(button);

        await screen.findByText('Password must be at least 5 characters long');
    });

    it('Checks proper Repeat Password typing', () => {
        renderRegisterPage();

        const repeatPasswordInput = screen.getByTestId('repeat-password-input');
        fireEvent.change(repeatPasswordInput, { target: { value: '123456' } });
        expect(repeatPasswordInput).toHaveValue('123456');
    });

    it('Checks invalid repeat password typing', async () => {
        renderRegisterPage();

        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByTestId('password-input');
        const repeatPasswordInput = screen.getByTestId('repeat-password-input');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.change(repeatPasswordInput, { target: { value: '12' } });

        const button = screen.getByText('Register');
        fireEvent.click(button);

        await screen.findByText('Passwords should be the same');
    });

    it('Checks "Wrong Credentials" warning', async () => {
        renderRegisterPage();

        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByTestId('password-input');
        const repeatPasswordInput = screen.getByTestId('repeat-password-input');
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: '' } });
        fireEvent.change(repeatPasswordInput, { target: { value: '' } });

        const button = screen.getByText('Register');
        fireEvent.click(button);

        await screen.findByText('Wrong Credentials');
    });
});
