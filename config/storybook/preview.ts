import type {Preview} from '@storybook/react';
import {StyleDecorator} from 'shared/config/storybook/StyleDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {RouterDecorator} from 'shared/config/storybook/RouterDecorator';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator({
            loginForm: {
                username: '123',
                password: '123',
                error: '',
                isLoading: false
            }
        }),
    ]
};

export default preview;
