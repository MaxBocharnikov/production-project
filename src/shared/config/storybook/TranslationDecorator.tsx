import type {Decorator} from '@storybook/react';
import {I18nextProvider} from 'react-i18next';
import i18ForTests from 'shared/config/i18ForTests';
import {Suspense} from 'react';

export const TranslationDecorator: Decorator = (Story, context) => (
    <I18nextProvider i18n={i18ForTests}>
        <Suspense fallback={''}>
            <Story {...context.args} />
        </Suspense>
    </I18nextProvider>
);
