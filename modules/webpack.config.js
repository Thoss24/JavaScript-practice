const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // load CSS example
            },
            {
                test: /\.(png|svg|jpg|gif)$/i, // load images example
                type: 'asset/resource',
            },
            {
                test: /\.(woff\woff2\eot\ttf\otf)$/i, // load fonts example
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'], // load CSV file
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['xml-loader'], // load XML (extensible markup language)
            },
        ],
    },
};