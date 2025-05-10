import type {Decorator} from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator: Decorator = (Story, context) => (
    <div className="app">
        <Story {...context.args} />
    </div>
);
