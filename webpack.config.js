const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: [ /\.js$/, /\.jsx$/ ],
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015', 'stage-1'] }
                }],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
