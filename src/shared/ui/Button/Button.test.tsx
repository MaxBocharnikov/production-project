import {screen} from '@testing-library/react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {renderWithTranslation} from '../../lib/tests/renderWithTranslation';

describe("Button", () => {
    test('renders', async () => {
        renderWithTranslation(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument()
    })

    test('has class clear', async () => {
        renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
        screen.debug()
    })
})