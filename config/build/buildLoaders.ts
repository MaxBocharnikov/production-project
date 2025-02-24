import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;
    const babel = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ["i18next-extract", {"nsSeparator": "~"}],
                ]
            }
        }
    }

    //если не используем typescript, используем babel-loader
    const typescript = {
            test: /\.tsx?$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        getCustomTransformers: () => ({
                            before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
                        }),
                        //transpileOnly: options.isDev,
                    },
                },
            ],
            exclude: /node_modules/,
    };



    const file = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svg = buildSvgLoader();

    const sass = buildCssLoader(isDev);

    return [
        babel,
        typescript,
        sass,
        file,
        svg
    ]
}
