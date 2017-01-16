var path = 'app/js/dev';
module.exports = {
    cache: true,
    debug: true,
    entry: './app/js/dev/app.jsx',
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