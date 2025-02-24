import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderWithTranslation} from '../../../shared/lib/tests/renderWithTranslation';

describe("Sidebar", () => {
    test('renders', async () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('sidebar non-toggled', async () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
    test('sidebar toggled', async () => {
        renderWithTranslation(<Sidebar />);
        const toggle = screen.getByTestId('toggle');
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})