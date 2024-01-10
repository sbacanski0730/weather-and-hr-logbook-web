import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthInterface from '../../../components/AuthInterface/AuthInterface.jsx';
import { ThemeProvider } from '../../../contexts/ThemeContext.jsx';

describe('AuthInterface component', () => {
    it('Checks does the component has INFO element', async () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
                <ThemeProvider>
                    <AuthInterface />
                </ThemeProvider>
            </MemoryRouter>
        );
        const e = await screen.findByText(/info/i);
        expect(e).toBeInTheDocument();
    });

    // ====================
    it('Checks does the component has Login element', async () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/info' }]}>
                <ThemeProvider>
                    <AuthInterface />
                </ThemeProvider>
            </MemoryRouter>
        );
        const e = await screen.findByText(/login/i);
        expect(e).toBeInTheDocument();
    });

    // ====================
    it('Checks does a proper icons was rendered in component', async () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
                <ThemeProvider>
                    <AuthInterface />
                </ThemeProvider>
            </MemoryRouter>
        );
        const icon = screen.getByTestId('dark-mode-icon');
        expect(icon).toBeInTheDocument();
    });
});
