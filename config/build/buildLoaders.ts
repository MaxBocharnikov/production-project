import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';

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

    const svg = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const sass = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev
                    ? "style-loader"
                    : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    return [
        babel,
        typescript,
        sass,
        file,
        svg
    ]
}
