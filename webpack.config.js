var webpack = require('webpack');
var path = 'app/js/dev';
module.exports = {
    cache: true,
    debug: true,
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        path + '/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
        alias: {
            Main: path + '/components/Main.jsx',
            Nav: path + '/components/Nav.jsx',
            Weather: path + '/components/Weather.jsx',
            WeatherMessage: path + '/components/WeatherMessage.jsx',
            WeatherForm: path + '/components/WeatherForm.jsx',
            ErrorModal: path + '/components/ErrorModal.jsx',
            openWeatherMap: path + '/api/openWeatherMap.jsx',
            About: path + '/components/About.jsx',
            Examples: path + '/components/Examples.jsx'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};