import type {Decorator} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';
import 'app/styles/index.scss';

export const RouterDecorator: Decorator = (Story, context) => (
    <BrowserRouter>
        <Story {...context.args} />
    </BrowserRouter>
);
