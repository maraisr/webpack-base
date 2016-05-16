var webpack = require('webpack');

module.exports = {
    entry: [
        './app/entry.ts'
    ],
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.pug']
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts' },
            { test: /\.pug?$/, loader: 'pug-html' }
        ]
    },
    plugins: (function () {
        var returns = [
            (function (clean) {
                return new clean(['./dist'], {
                    verbose: true,
                    dry: false
                })
            })(require('clean-webpack-plugin'))
        ];

        if (process.env.NODE_ENV == 'production') {
            returns.push(new webpack.optimize.UglifyJsPlugin());
        }

        return returns;
    })()
}
