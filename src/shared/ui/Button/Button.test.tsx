import {screen} from '@testing-library/react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {componentRender} from 'shared/config/tests/companentRender';

describe("Button", () => {
    test('renders', async () => {
        componentRender(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument()
    })

    test('has class clear', async () => {
        componentRender(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
    })
})