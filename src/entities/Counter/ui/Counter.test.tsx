import {fireEvent, screen} from '@testing-library/react';
import {Counter} from './Counter';
import {componentRender} from 'shared/config/tests/companentRender';

describe("COUNTER", () => {
    test('renders', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {value: 10}
            }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {value: 10}
            }
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {value: 10}
            }
        });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})