import path from 'path';

module.exports = {
    entry: path.resolve(__dirname, '../src/client/app.js'),
    output: {
        path: path.resolve(__dirname, '../bundles'),
        filename: "client.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
};
