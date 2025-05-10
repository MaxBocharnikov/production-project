import {StoryFn, StoryContext} from '@storybook/react';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';

export const StoreDecorator =
    (initialState: Partial<StateSchema>) =>
        (StoryComponent: StoryFn, context: StoryContext) => (
            <StoreProvider initialState={initialState}>
                {StoryComponent(context.args, context)}
            </StoreProvider>
        );
