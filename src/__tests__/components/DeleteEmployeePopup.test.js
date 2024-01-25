import { render, screen, fireEvent } from '@testing-library/react';
import DeleteEmployeePopup from '../../components/DeleteEmployeePopup.jsx';
import { ThemeProvider } from '../../contexts/ThemeContext.jsx';

describe('DeleteEmployeePopup', () => {
    const mockHandleDelete = jest.fn();
    const mockSetTrigger = jest.fn();

    it('Tests proper render of the component', () => {
        render(
            <ThemeProvider>
                <DeleteEmployeePopup trigger setTrigger={mockSetTrigger} handleDelete={mockHandleDelete} />
            </ThemeProvider>
        );
    });

    it('Tests proper function call after YES click', () => {
        render(
            <ThemeProvider>
                <DeleteEmployeePopup trigger setTrigger={mockSetTrigger} handleDelete={mockHandleDelete} />
            </ThemeProvider>
        );
        const button = screen.getByText(/yes/i);
        fireEvent.click(button);
        expect(mockHandleDelete).toHaveBeenCalled();
    });

    it('Tests proper function call after NO click', () => {
        render(
            <ThemeProvider>
                <DeleteEmployeePopup trigger setTrigger={mockSetTrigger} handleDelete={mockHandleDelete} />
            </ThemeProvider>
        );
        const button = screen.getByText(/no/i);
        fireEvent.click(button);
        expect(mockSetTrigger).toHaveBeenCalled();
    });
});
