import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {componentRender} from 'shared/config/tests/companentRender';

describe("Sidebar", () => {
    test('renders', async () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('sidebar non-toggled', async () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
    test('sidebar toggled', async () => {
        componentRender(<Sidebar />);
        const toggle = screen.getByTestId('toggle');
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})