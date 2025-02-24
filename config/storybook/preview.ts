import type {Preview} from "@storybook/react";
import {StyleDecorator} from 'shared/config/storybook/StyleDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {RouterDecorator} from 'shared/config/storybook/RouterDecorator';


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
      (Story) => (Story(StyleDecorator)),
      ThemeDecorator(Theme.LIGHT),
      (Story) => RouterDecorator(Story),
  ]
};

export default preview;
