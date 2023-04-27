const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env, argv) => {
    const IS_DEV = argv.mode === "development";
    const IS_PROD = argv.mode === "production";
    const _entry = [
        './js/theme.js',
        './css/theme.scss'
    ];
    const _entrySass = [
        './css/theme.scss'
    ];
    const ONLY_SASS = argv.onlysass === true;

    return {
        devtool: IS_DEV ? 'cheap-eval-source-map' : '',
        entry: {
            theme: ONLY_SASS ? _entrySass : _entry
        },
        output: {
            path: path.resolve(__dirname, '../assets/js'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    // exclude: /(node_modules|bower_components)/,
                    include: [
                        path.join(__dirname, '')
                    ],
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s[ac]ss/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: IS_DEV,
                                postcssOptions: {
                                    plugins: [
                                        autoprefixer,
                                        require('postcss-minimize'),
                                        require('postcss-base64')({
                                            extensions: ['.jpg', '.png', '.svg']
                                        })
                                    ]
                                },
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        },
                    ]
                },
                {
                    test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    exclude: /(im(a)?g(e)?)(s\b|\b)/,
                    loader: 'file-loader',
                    options: {
                        name: '../fonts/[name].[ext]'
                    }
                },
                {
                    test: /\.(png|jp(e)g|gif|svg|webp)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '../img/[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: 'style-loader',
                        options: {sourceMap: IS_DEV}
                    }, {
                        loader: 'css-loader',
                        options: {sourceMap: IS_DEV}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: IS_DEV}
                    }]
                }
            ]
        },
        externals: {
            $: '$',
            jquery: 'jQuery'
        },
        optimization: {
            minimize: true,
            minimizer: [
                // new TerserPlugin({
                //     parallel: true,
                //     test: /\.js($|\?)/i,
                //     terserOptions: {
                //         compress: {
                //             booleans: IS_PROD,
                //             conditionals: IS_PROD,
                //             drop_console: IS_PROD,
                //             drop_debugger: IS_PROD,
                //             if_return: IS_PROD,
                //             join_vars: IS_PROD,
                //             keep_classnames: IS_DEV,
                //             keep_fnames: IS_DEV,
                //             reduce_vars: IS_PROD,
                //             sequences: IS_PROD,
                //             warnings: IS_DEV,
                //             ecma: 5,
                //
                //         },
                //         output: {
                //             comments: IS_DEV
                //         }
                //     }
                // }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            annotation: true,
                            inline: IS_DEV
                        }
                    }
                }),
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "../css/[name].css",
                chunkFilename: "../css/[id].css"
            }),
            new webpack.ProvidePlugin({
                Popper: ['popper.js', 'default']
            }),
            //new StylelintPlugin()

        ],
        watchOptions: {
            ignored: /node_modules/
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
}