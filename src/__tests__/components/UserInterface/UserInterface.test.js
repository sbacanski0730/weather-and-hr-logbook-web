import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserInterface from '../../../components/UserInterface/UserInterface.jsx';
import { ThemeProvider } from '../../../contexts/ThemeContext.jsx';

describe('UserInterface component', () => {
    it('Checks proper render of the component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <ThemeProvider>
                    <UserInterface />
                </ThemeProvider>
            </MemoryRouter>
        );
    });
});
