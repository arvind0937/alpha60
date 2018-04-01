import path from 'path';

module.exports = {
    name: 'server',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../bundles'),
        filename: "server.js"
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
