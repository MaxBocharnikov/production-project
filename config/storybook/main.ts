import webpack, {RuleSetRule} from 'webpack';
import path from 'path';
import type { StorybookConfig } from "@storybook/react-webpack5";
import {BuildPaths} from '../build/types/config';
import {buildCssLoader} from '../build/loaders/buildCssLoader';
import {buildSvgLoader} from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal(config: webpack.Configuration): webpack.Configuration {
    const paths: BuildPaths = {
      src: path.resolve(__dirname, '..', '..', 'src'),
      html: '',
      build: '',
      entry: '',
    }
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(...[
        buildCssLoader(true),
        buildSvgLoader()
    ]);
    config.plugins.push(new webpack.ProvidePlugin({
      'React': 'react',
    }));
    return config;
  }
};
export default config;
