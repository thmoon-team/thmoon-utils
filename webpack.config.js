const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                'postcss-import',
                'postcss-flexbugs-fixes',
                'autoprefixer',
                [
                    'postcss-preset-env',
                    {
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                        features: {
                            'custom-properties': true,
                        },
                    },
                ],
            ],
        },
    },
};

const prodCssLoaders = [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            modules: {
                auto: true,
                localIdentName: '[hash:base64:7]',
            },
        },
    },
    postCssLoader,
];

const sassLoader = {
    loader: 'sass-loader',
};

const styleResources = {
    loader: 'style-resources-loader',
    options: {
        patterns: [],
    },
};

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd'
    },
    plugins: [new CaseSensitivePathsPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...prodCssLoaders],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [...prodCssLoaders, sassLoader, styleResources],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgoConfig: {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                            memo: true,
                            svgProps: {
                                width: '24px',
                                height: '24px',
                            },
                        },
                    },
                    'url-loader',
                ],
            },
            {
                test: /\.js.map$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
            // images
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    externals: {
        react: 'react',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                    output: {
                        comments: false,
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
    }
};