import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;
    //если не используем typescript, используем babel-loader
    const typescript = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    };

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
        typescript,
        sass
    ]
}
